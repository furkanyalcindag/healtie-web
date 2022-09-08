<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Makale Ekle</h2>
            </CCol>
            <CCol lg="9" class="text-right mt-3">{{ addedItem }}</CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class="p-2">
          <CForm
            class="row g-3"
            @submit.prevent="
              isAbleToPushButton
                ? submitToAPI($event, 'addArticle', addedItem.data)
                : null
            "
            needs-validation
            novalidate
            :validated="validationChecked"
          >
            <CCol md="6">
              <CFormLabel for="add-article-title">Makale Başlığı</CFormLabel>
              <CFormInput
                id="add-article-title"
                required
                feedbackInvalid="Lütfen bir başlık giriniz"
                v-model="addedItem.data.title"
              />
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-tags">Etiketler</CFormLabel>
              <v-select
                id="add-article-tags"
                v-model="addedItem.data.tags"
                :options="tagList.options"
                multiple
                label="name"
                :loading="tagList.loading"
              >
                <template v-slot:no-options="{ search, searching }">
                  <template v-if="searching">
                    Sonuç bulunamadı:
                    <em>{{ search }}</em
                    >.
                  </template>
                  <em v-else style="opacity: 0.5">Seçmene gerek yok.</em>
                </template>
              </v-select>
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-tags"
                >İlgili Kategorileri Seçiniz</CFormLabel
              >
              <!-- <CFormSelect
                size="lg"
                multiple
                required
                aria-label="Multiple select example"
              >
                <option value="1">Dermatoloji</option>
                <option value="2">Kadın Doğum</option>
                <option value="3">Nöroloji</option>
                <option value="4">Üroloji</option>
                <option value="5">Nöroloji</option>
                <option value="6">Nöroloji</option>
              </CFormSelect> -->
              <v-select
                id="add-category-parent-category"
                v-model="addedItem.data.categoryList"
                :options="categoryList.options"
                label="name"
                multiple
                :reduce="(option) => ({ uuid: option.uuid, name: option.name })"
                @search="
                  (search) => get_Filtered_Category_List_Options_Data(search)
                "
                :loading="categoryList.loading"
              >
                <template v-slot:no-options="{ search, searching }">
                  <template v-if="searching">
                    Sonuç bulunamadı:
                    <em>{{ search }}</em
                    >.
                  </template>
                  <em v-else style="opacity: 0.5">Bir daha dene.</em>
                </template>
                <template #search="{ attributes, events }">
                  <input
                    class="form-control vs__search"
                    feedbackInvalid="Lütfen bir kategori adı giriniz"
                    :required="!addedItem.data.categoryList.length > 0"
                    v-bind="attributes"
                    v-on="events"
                  />
                </template>
              </v-select>
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-publishedDate"
                >Yayımlanma Tarihi</CFormLabel
              >
              <CFormInput
                id="add-article-publishedDate"
                required
                type="date"
                feedbackInvalid="Lütfen bir tarih giriniz"
                v-model="addedItem.data.publishedDate"
              />
            </CCol>
            <CCol md="12">
              <CFormLabel for="add-article-content" class="m-2"
                >Makale İçeriği</CFormLabel
              >
              <light-editor
                v-model="addedItem.data.description"
                ref="article-description"
              />
              <div
                class="prose lg:prose-xl"
                v-html="addedItem.data.description"
                required
              ></div>
            </CCol>
            <CModalFooter class="pe-0">
              <CButton color="success" type="submit" class="m-2">
                Kaydet</CButton
              >
            </CModalFooter>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
/* eslint-disable */
import avatar from '@/assets/images/avatars/8.jpg'
import Toast from '@/models/create_TOAST_dto'
import createArticleDTO from '@/models/create_ARTICLE_dto'
import { mapActions } from 'vuex'
export default {
  name: 'Colors',
  components: {},
  data() {
    return {
      avatar: avatar,
      headers: [],
      items: [],
      addedItem: {
        // Real data
        data: new createArticleDTO(
          null,
          'TR',
          null,
          new Date()
            .toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })
            .replaceAll('.', '-')
            .split('-')
            .reverse()
            .join('-'),
          null,
          [],
        ),

        isDescriptionEnoughToSend: false,
      },
      // Tag selection
      tagList: {
        options: [
          { name: 'Depresyon', language: 'TR' },
          { name: 'Hayvan', language: 'TR' },
          { name: 'Çocuk', language: 'TR' },
          { name: 'Tatlılar', language: 'TR' },
          { name: 'Obezler', language: 'TR' },
        ],
      },
      // Category Selection
      categoryList: {
        // The parent category list inside selection in addCategory
        options: [],
        // Parent category Selection server options for getting options in selection in addCategoryModal
        parentListSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 50,
        },
        loading: true,
      },
      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {},
      isAbleToPushButton: true,
      validationChecked: false,
    }
  },
  watch: {
    'addedItem.data.description'(newvalue) {
      this.checkDescriptionLength(newvalue)
    },
  },
  created() {
    this.get_Filtered_Category_List_Options_Data()
  },
  methods: {
    ...mapActions({
      getAllCategories: 'category/getCategories',
      addArticleAPI: 'article/addArticle',
    }),
    // This one for to filter the selection list by search value
    async get_Filtered_Category_List_Options_Data(searched) {
      this.categoryList.loading = true
      if (searched) {
        let filterBy = [
          {
            key: 'name',
            operation: ':',
            type: 'name',
            value: searched,
          },
        ]
        let searchedFor = {
          pageOptions:
            this.categoryList.parentListSearcherDefaultServerOptions,
          filter: filterBy,
        }
        const response = await this.getAllCategories(searchedFor)
        this.categoryList.options = reduceDataHeaviless(response.data)
      } else {
        let searchedFor = {
          pageOptions:
            this.categoryList.parentListSearcherDefaultServerOptions,
          filter: null,
        }
        const response = await this.getAllCategories(searchedFor)
        this.categoryList.options = reduceDataHeaviless(response.data)
      }
      this.categoryList.loading = false
      function reduceDataHeaviless(data) {
        // Reducing if the data is too heavy to handle
        return data.map((category) => {
          return { uuid: category.uuid, name: category.name }
        })
      }
    },
    checkDescriptionLength(newvalue) {
      if (newvalue && newvalue.length > 20) {
        this.addedItem.isDescriptionEnoughToSend = true
        if (this.validationChecked) {
          this.$refs['article-description'].$el.setAttribute(
            'style',
            'border-color: green;',
          )
        }
      } else {
        this.addedItem.isDescriptionEnoughToSend = false
        if (this.validationChecked) {
          this.$refs['article-description'].$el.setAttribute(
            'style',
            'border-color: red;',
          )
        }
      }
    },
    submitToAPI(event, actionname, data) {
      // Response
      this.isAbleToPushButton = false
      this.validationChecked = true
      this.checkDescriptionLength(this.addedItem.data.description)
      const form = event.currentTarget
      if (this.addedItem.isDescriptionEnoughToSend === false) {
        event.preventDefault()
        event.stopPropagation()
        this.isAbleToPushButton = true
        return
      }
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        this.isAbleToPushButton = true
        return
      }
      switch (actionname) {
        case 'addArticle':
          {
            this.addArticle(JSON.parse(JSON.stringify(data)))
          }
          break
      }
      this.isAbleToPushButton = true
    },
    async addArticle(data) {
      data.categoryList = await takeCategoryListUUIDS(data.categoryList)
      console.log(data)
      const response = await this.addArticleAPI(data)
      if (response === true) {
        ;(this.addedItem.data = new createArticleDTO(
          '',
          'TR',
          '',
          new Date()
            .toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })
            .replaceAll('.', '-')
            .split('-')
            .reverse()
            .join('-'),
          [],
          [],
        )),
          new Toast(
            'Category added successfully',
            'success',
            true,
            'text-white align-items-center',
          )
          this.validationChecked = false
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
      function takeCategoryListUUIDS() {
        return data.categoryList.map((category) => {
          return category.uuid
        })
      }
    },
    closeModal(index) {
      this.openedModals[index] = false
      this.validationChecked = false
    },
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
