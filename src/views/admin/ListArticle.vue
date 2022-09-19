/* eslint-disable */
<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Makale Listesi</h2>
            </CCol>
            <CCol lg="9" class="text-right mt-3">
              <CButton
                color="primary"
                class="float-end"
                shape="rounded-pill"
                @click="doAction('goSpecifiedPage', 'Article Doctor')"
                >Ekle</CButton
              >
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class="p-0">
          <easy-data-table
            class="m-4"
            show-index
            v-model:itemsSelected="itemsSelected"
            v-model:server-options="articleTable.serverOptions"
            :server-items-length="articleTable.serverItemsLength"
            :headers="headers"
            :items="items"
            :theme-color="themeColor"
            buttons-pagination
            :loading="articleTable.loading"
            :rows-items="articleTable.rowsItem"
          >
            <template #item-title="{ title }">
              <div class="position-relative d-inline-block">
                <CTooltip :content="title" placement="top">
                  <template #toggler="{ on }">
                    <div
                      v-on="on"
                      style="max-width: 200px"
                      class="d-inline-block text-truncate"
                    >
                      {{ title }}
                    </div>
                  </template>
                </CTooltip>
              </div>
            </template>
            <template #item-statictics="{ likeCount, saveCount, commentCount }">
              <div class="position-relative d-inline-block">
                <CTooltip :content="String(likeCount)" placement="top">
                  <template #toggler="{ on }">
                    <CIcon
                      icon="cil-heart"
                      size="xxl"
                      class="text-danger"
                      v-on="on"
                      style="cursor: pointer"
                    />
                  </template>
                </CTooltip>
              </div>
              <div class="position-relative d-inline-block">
                <CTooltip :content="String(saveCount)" placement="top">
                  <template #toggler="{ on }">
                    <CIcon
                      icon="cil-bookmark"
                      size="xxl"
                      class="text-info"
                      v-on="on"
                      style="cursor: pointer"
                    />
                  </template>
                </CTooltip>
              </div>
              <div class="position-relative d-inline-block">
                <CTooltip :content="String(commentCount)" placement="top">
                  <template #toggler="{ on }">
                    <CIcon
                      icon="cil-speech"
                      size="xxl"
                      class="text-dark"
                      v-on="on"
                      style="cursor: pointer"
                    />
                  </template>
                </CTooltip>
              </div>
            </template>
            <template #item-operations="item">
              <div>
                <CButtonGroup role="group" size="sm">
                  <CButton
                    color="warning"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Düzenle',
                      placement: 'top',
                    }"
                    @click="showModal('updateArticleModal', item)"
                  >
                    <CIcon icon="cil-pencil" />
                  </CButton>
                  <CButton
                    color="danger"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Sil',
                      placement: 'top',
                    }"
                    @click="showModal('deleteArticleModal', item)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CButtonGroup>
              </div>
            </template>
          </easy-data-table>
        </CCardBody>
      </CCard>
    </CCol>
    <!-- Delete category -->
    <CModal
      size="lg"
      :visible="openedModals.deleteArticleModal"
      @close="closeModal('deleteArticleModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Kategori bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteArticleModal')"
            >Kapat</CButton
          >
          <CButton
            color="danger"
            @click="
              isAbleToPushButton ? deleteArticle(selectedArticle.uuid) : null
            "
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Update category -->
    <CModal
      size="lg"
      :visible="openedModals.updateArticleModal"
      @close="closeModal('updateArticleModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            submitToAPI($event, 'updateArticleModal', editedItem.data)
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="12">
            <CFormLabel for="update-article-title">Makale Başlığı</CFormLabel>
            <CFormInput
              id="update-article-title"
              required
              feedbackInvalid="Lütfen bir makale adı giriniz"
              v-model="editedItem.data.title"
            />
          </CCol>
          <!-- Article tags -->
          <CCol md="6">
            <CFormLabel for="add-article-tags">Etiketler</CFormLabel>
            <v-select
              id="add-article-tags"
              v-model="editedItem.data.tags"
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
          <!-- Article published Date -->
          <CCol md="6">
            <CFormLabel for="edit-article-publishedDate"
              >Yayımlanma Tarihi</CFormLabel
            >
            <CFormInput
              id="edit-article-publishedDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItem.data.publishedDate"
            />
          </CCol>
          <!-- For category parent list multiple selection -->
          <CFormLabel for="edit-category-parent-category"
            >Makale Kategorisi</CFormLabel
          >
          <v-select
            id="edit-category-parent-category"
            v-model="editedItem.data.categoryListForArticle"
            :options="categoryList.options"
            label="name"
            multiple
            :reduce="(option) => ({ uuid: option.uuid, name: option.name })"
            @search="(search) => get_Filtered_Parent_List_Options_Data(search)"
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
                :required="!(editedItem.data.categoryListForArticle.length > 0)"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </v-select>
          <!-- For language selection -->
          <CFormLabel for="add-language-to-category">Dil seçimi</CFormLabel>
          <v-select
            id="add-language-to-category"
            v-model="editedItem.data.language"
            :options="languageList.options"
            label="name"
            :loading="languageList.loading"
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
                :required="!editedItem.data.language"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </v-select>
          <!-- Article Description -->
          <CCol md="12">
            <CFormLabel for="add-article-content" class="m-2"
              >Makale İçeriği</CFormLabel
            >
            <light-editor
              v-model="editedItem.data.description"
              ref="article-description"
            />
            <div
              class="prose lg:prose-xl"
              v-html="editedItem.data.description"
              required
            ></div>
          </CCol>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateArticleModal')"
              >Kapat</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
import { mapActions } from 'vuex'
import createArticleDTO from '@/models/create_ARTICLE_dto'
import Toast from '@/models/create_TOAST_dto'
import router from '@/router'
export default {
  name: 'Colors',
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
  },
  data() {
    return {
      avatar: avatar,
      headers: [
        { text: 'Başlık', value: 'title', sortable: true },
        { text: 'Yazar', value: 'author', sortable: true },
        { text: 'Yayınlanma Tarihi', value: 'publishedDate', sortable: true },
        { text: 'İstatistikler', value: 'statictics', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
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
      },
      editedItem: {
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
      // Category Selection
      categoryList: {
        // The parent category list inside selection in addCategory
        options: [],
        // Parent category Selection server options for getting options in selection in addArticleModal
        parentListSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 50,
        },
        loading: true,
      },
      // Language Selection
      languageList: {
        // The language list inside selection in addCategory
        options: ['TR', 'EN'],
        // Language Selection server options for getting options in selection in addCategory
        languageSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        loading: true,
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
      themeColor: '#321fdb',
      itemsSelected: [],
      openedModals: {
        addArticleModal: false,
        deleteArticleModal: false,
        updateArticleModal: false,
      },
      articleTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: false,
      },
      validationChecked: false,
      isAbleToPushButton: true,
      toasts: [],
      selectedArticle: {},
    }
  },
  watch: {
    'articleTable.serverOptions'(newvalue) {
      this.getArticles(newvalue)
    },
    'editedItem.data.description'(newvalue) {
      this.checkDescriptionLength(newvalue)
    },
  },
  created() {
    this.getArticles(this.articleTable.serverOptions)
  },
  methods: {
    ...mapActions({
      getAllCategories: 'category/getCategories',
      getAllArticles: 'article/getArticles',
      getAllLanguages: 'language/getLanguages',
      addCategoryAPI: 'category/addCategory',
      deleteArticleAPI: 'article/deleteArticle',
      updateArticleAPI: 'article/updateArticle',
    }),
    submitToAPI(event, modalname, data) {
      // Response
      this.isAbleToPushButton = false
      this.validationChecked = true
      this.checkDescriptionLength(this.editedItem.data.description)
      const form = event.currentTarget
      if (this.editedItem.isDescriptionEnoughToSend === false) {
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
      switch (modalname) {
        case 'addArticleModal':
          {
            this.addCategory(JSON.parse(JSON.stringify(data)))
          }
          break
        case 'updateArticleModal':
          {
            this.updateArticle(JSON.parse(JSON.stringify(data)))
          }
          break
      }
      this.isAbleToPushButton = true
    },
    // This two For to filter the selection list by search value
    async get_Filtered_Parent_List_Options_Data(searched) {
      this.categoryList.loading = true
      // Filtered version(if) and unfiltered version(else)
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
          pageOptions: this.categoryList.parentListSearcherDefaultServerOptions,
          filter: filterBy,
        }
        const response = await this.getAllCategories(searchedFor)
        this.categoryList.options = reduceDataHeaviless(response.data)
      } else {
        let searchedFor = {
          pageOptions: this.categoryList.parentListSearcherDefaultServerOptions,
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
    async get_Filtered_Language_Options_Data(searched) {
      this.languageList.loading = true
      if (searched) {
        let filterBy = [
          {
            key: 'title',
            operation: ':',
            type: 'title',
            value: searched,
          },
        ]
        const response = await this.getAllLanguages(
          this.languageList.languageSearcherDefaultServerOptions,
          filterBy,
        )
        this.languageList.options = response.data
      } else {
        const response = await this.getAllLanguages(
          this.languageList.languageSearcherDefaultServerOptions,
        )
        this.languageList.options = response.data
      }
      this.languageList.loading = false
    },
    async doAction(actionName, data) {
      switch (actionName) {
        case 'goSpecifiedPage':
          {
            router.push({ name: data })
          }
          break
      }
    },
    async showModal(modalname, data) {
      this.selectedArticle = data ? JSON.parse(JSON.stringify(data)) : {}
      switch (modalname) {
        case 'updateArticleModal':
          {
            this.editedItem.data = JSON.parse(JSON.stringify(data))
            this.categoryList.loading = true
            this.languageList.loading = true
            this.get_Filtered_Parent_List_Options_Data()
            //this.get_Filtered_Language_Options_Data()
            this.categoryList.loading = false
            this.languageList.loading = false
          }
          break
      }
      this.openedModals[modalname] = true
    },
    closeModal(modalname, resetData) {
      this.openedModals[modalname] = false
      this.validationChecked = false
      if (resetData) {
        switch (modalname) {
          case 'addArticleModal':
            {
              // Restore added item on clicking "No/Deny"
              this.addedItem = {
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
              }
            }
            break
        }
      }
    },
    checkDescriptionLength(newvalue) {
      if (newvalue && newvalue.length > 20) {
        this.editedItem.isDescriptionEnoughToSend = true
        if (this.validationChecked) {
          this.$refs['article-description'].$el.setAttribute(
            'style',
            'border-color: green;',
          )
        }
      } else {
        this.editedItem.isDescriptionEnoughToSend = false
        if (this.validationChecked) {
          this.$refs['article-description'].$el.setAttribute(
            'style',
            'border-color: red;',
          )
        }
      }
    },
    // eslint-disable-next-line
    async getArticles(pageOptions) {
      this.articleTable.loading = true
      const response = await this.getAllArticles({
        pageOptions: pageOptions,
        filter: null,
      })
      this.items = response.data
      this.articleTable.serverItemsLength = response.totalElements
      this.articleTable.loading = false
    },
    async updateArticle(newCategoryData) {
      this.isAbleToPushButton = false
      newCategoryData.categoryListForArticle = await takeParentListUUIDS()
      const response = await this.updateArticleAPI(newCategoryData)
      if (response === true) {
        new Toast(
          'Category updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getArticles(this.articleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateArticleModal')
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
      function takeParentListUUIDS() {
        return newCategoryData.categoryListForArticle.map((category) => {
          return category.uuid
        })
      }
    },
    async deleteArticle(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteArticleAPI(uuid)
      if (response === true) {
        this.selectedArticle = {}
        new Toast(
          'Article deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white -align-items-center',
        )
      }
      this.isAbleToPushButton = true
      this.closeModal('deleteArticleModal')
    },
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
