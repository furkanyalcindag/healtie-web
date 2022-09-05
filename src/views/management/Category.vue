<template>
  <CRow>
    <CToaster class="position-fixed top-0 start-50 translate-middle-x">
      <CToast
        v-for="(toast, index) in toasts"
        :key="index"
        :color="toast.color"
        :autohide="toast.autohide"
        :class="toast.classes"
      >
        <div class="d-flex">
          <CToastBody>{{ toast.content }}</CToastBody>
          <CToastClose class="me-2 m-auto" white />
        </div>
      </CToast>
    </CToaster>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Kategori Listesi</h2>
            </CCol>
            <CCol lg="9" class="text-right mt-3">
              <CButton
                color="primary"
                class="float-end"
                shape="rounded-pill"
                @click="addCategory_ShowModal()"
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
            v-model:server-options="categoryTable.serverOptions"
            :server-items-length="categoryTable.serverItemsLength"
            :headers="headers"
            :items="items"
            :theme-color="themeColor"
            buttons-pagination
            :loading="categoryTable.loading"
            :rows-items="categoryTable.rowsItem"
          >
            <template #item-operations>
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
                    @click="
                      () => {
                        openedModals.updateCategoryModal = true
                      }
                    "
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
                    @click="
                      () => {
                        openedModals.deleteCategoryModal = true
                      }
                    "
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
    <!-- Add category -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.addCategoryModal"
      @close="closeModal('addCategoryModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            checkValidation($event, 'addCategoryModal', addedItem.data)
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-category-name">Kategori Adı</CFormLabel>
            <CFormInput
              id="add-category-name"
              required
              feedbackInvalid="Lütfen bir kategori adı giriniz"
              v-model="addedItem.data.name"
              autocomplete="off"
            />
          </CCol>
          <!-- For category parent list multiple selection -->
          {{ addedItem.data.parentList }}
          <CFormLabel for="add-category-parent-category"
            >Üst kategorileri</CFormLabel
          >
          <v-select
            id="add-category-parent-category"
            v-model="addedItem.data.parentList"
            :options="addedItem.parentCategoryList.options"
            label="name"
            multiple
            @search="
              (search) => addCategory_GetFilteredParentListOptionsData(search)
            "
            :loading="addedItem.parentCategoryList.loading"
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
          <!-- For language selection -->
          {{ addedItem.data.language }}
          <CFormLabel for="add-language-to-category"
            >Üst kategorileri</CFormLabel
          >
          <v-select
            id="add-language-to-category"
            v-model="addedItem.data.language"
            :options="addedItem.languageList.options"
            label="name"
            @search="
              (search) => addCategory_GetFilteredLanguageOptionsData(search)
            "
            :loading="addedItem.languageList.loading"
          >
            <template v-slot:no-options="{ search, searching }">
              <template v-if="searching">
                Sonuç bulunamadı:
                <em>{{ search }}</em
                >.
              </template>
              <em v-else style="opacity: 0.5">Seçmene gerek yok.</em>
            </template>
            <template #search="{ attributes, events }">
              <input
                class="form-control vs__search"
                feedbackInvalid="Lütfen bir kategori adı giriniz"
                :required="!addedItem.data.language"
                v-bind="attributes"
                v-on="events"
              />
            </template>
          </v-select>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('addCategoryModal', true)"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
            >
              Ekle</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Delete category -->
    <CModal
      size="lg"
      :visible="openedModals.deleteCategoryModal"
      @close="closeModal('deleteCategoryModal')"
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
          <CButton color="secondary" @click="closeModal('deleteCategoryModal')"
            >Kapat</CButton
          >
          <CButton color="danger" :type="isAbleToPushButton ? 'submit' : null"
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Update category -->
    <CModal
      size="lg"
      :visible="openedModals.updateCategoryModal"
      @close="closeModal('updateCategoryModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="checkValidation()"
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-category-name">Kategori Adı</CFormLabel>
            <CFormInput
              id="update-category-name"
              required
              feedbackInvalid="Lütfen bir kategori adı giriniz"
            />
          </CCol>
          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateCategoryModal')"
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
export default {
  name: 'Colors',
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
  },
  data() {
    return {
      avatar: avatar,
      headers: [
        { text: 'Kategori Adı', value: 'name', sortable: true },
        { text: 'Toplam Makale Sayısı', value: 'articleCount' },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [
        {
          name: 'Kalp Damar Hastalıkları',
          articleCount: '15',
        },
        {
          name: 'Psikoloji',
          articleCount: '17',
        },
        {
          name: 'Dermatoloji',
          articleCount: '6',
        },
      ],
      addedItem: {
        // Real data
        data: {
          name: null,
          parentList: [],
          language: null,
        },
        // Category Selection
        parentCategoryList: {
          // Parent category Selection server options for getting options in selection in addCategory
          parentListSearcherDefaultServerOptions: {
            page: 1,
            rowsPerPage: 50,
          },
          // The parent category list inside selection in addCategory
          options: [],
          loading: true,
        },
        // Language Selection
        languageList: {
          // Language Selection server options for getting options in selection in addCategory
          languageSearcherDefaultServerOptions: {
            page: 1,
            rowsPerPage: 10,
          },
          // The language list inside selection in addCategory
          options: [],
          loading: true,
        },
      },
      themeColor: '#321fdb',
      itemsSelected: [],
      openedModals: {
        addCategoryModal: false,
        deleteCategoryModal: false,
        updateCategoryModal: false,
      },
      categoryTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },
      validationChecked: false,
      isAbleToPushButton: true,
      toasts: [],
    }
  },
  watch: {
    'categoryTable.serverOptions'(newvalue) {
      this.getCategories(newvalue)
    },
  },
  created() {
    this.getCategories(this.categoryTable.serverOptions)
  },
  methods: {
    ...mapActions({
      getAllCategories: 'category/getCategories',
      getAllLanguages: 'language/getLanguages',
      addCategoryAPI: 'category/addCategory',
    }),
    async addCategory_GetFilteredParentListOptionsData(searched) {
      this.addedItem.parentCategoryList.loading = true
      if (searched) {
        let filterBy = [
          {
            key: 'title',
            operation: ':',
            type: 'title',
            value: searched,
          },
        ]
        const response = await this.getAllCategories(
          this.addedItem.parentCategoryList
            .parentListSearcherDefaultServerOptions,
          filterBy,
        )
        this.addedItem.parentCategoryList.options = reduceDataHeaviless(
          response.data,
        )
      } else {
        const response = await this.getAllCategories(
          this.addedItem.parentCategoryList
            .parentListSearcherDefaultServerOptions,
        )
        this.addedItem.parentCategoryList.options = reduceDataHeaviless(
          response.data,
        )
      }
      this.addedItem.parentCategoryList.loading = false
      function reduceDataHeaviless(data) {
        // Reducing if the data is too heavy to handle
        return data.map((category) => {
          return { uuid: category.uuid, name: category.name }
        })
      }
    },
    async addCategory_GetFilteredLanguageOptionsData(searched) {
      this.addedItem.languageList.loading = true
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
          this.addedItem.languageList.languageSearcherDefaultServerOptions,
          filterBy,
        )
        this.addedItem.languageList.options = reduceDataHeaviless(response.data)
      } else {
        const response = await this.getAllLanguages(
          this.addedItem.languageList.languageSearcherDefaultServerOptions,
        )
        this.addedItem.languageList.options = reduceDataHeaviless(response.data)
      }
      this.addedItem.languageList.loading = false
      function reduceDataHeaviless(data) {
        // Reducing if the data is too heavy to handle
        return data.map((language) => {
          return { uuid: language.uuid, name: language.name }
        })
      }
    },
    async addCategory_ShowModal() {
      this.openedModals.addCategoryModal = true
      this.addedItem.parentCategoryList.loading = true
      this.addedItem.languageList.loading = true
      const responseCategory = await this.getAllCategories(
        this.addedItem.parentCategoryList
          .parentListSearcherDefaultServerOptions,
      )
      // Reducing if the data is too heavy to handle
      this.addedItem.parentCategoryList.options = reduceDataHeaviless(
        responseCategory.data,
      )
      const responseLanguage = await this.getAllLanguages(
        this.addedItem.languageList.languageSearcherDefaultServerOptions,
      )
      // Reducing if the data is too heavy to handle
      this.addedItem.languageList.options = responseLanguage.data.map(
        (language) => {
          return {
            uuid: language.uuid,
            name: language.name,
            language: language.language,
          }
        },
      )
      this.addedItem.parentCategoryList.loading = false
      this.addedItem.languageList.loading = false
      function reduceDataHeaviless(data) {
        // Reducing if the data is too heavy to handle
        return data.map((currentData) => {
          return { uuid: currentData.uuid, name: currentData.name }
        })
      }
    },
    // eslint-disable-next-line
    async addCategory(data) {
      // Cleaning up data a little bit. Json parse for copying the object without connecting them together
      let cachedData = JSON.parse(JSON.stringify(data))
      let parentCategoryListUUIDS = await cachedData.parentList.map(
        (parentcategory) => {
          return parentcategory.uuid
        },
      )
      cachedData.parentList = await JSON.parse(
        JSON.stringify(parentCategoryListUUIDS),
      )
      // ITS NEEDED TO BE SETTED LANGUAGE.LANGUAGE HERE !! ******************************************************************PROBLEM************************************************************
      // cachedData.language = cachedData.language.language
      cachedData.language = 'TR'
      const response = await this.addCategoryAPI(cachedData)
      if (response === true) {
        this.createToast(
          'Category added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getCategories(this.categoryTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('addCategoryModal', true)
      } else {
        this.createToast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    checkValidation(event, modalname, data) {
      // Response
      this.isAbleToPushButton = false
      this.validationChecked = true
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        this.isAbleToPushButton = true
        return
      }
      switch (modalname) {
        case 'addCategoryModal':
          {
            this.addCategory(JSON.parse(JSON.stringify(data)))
          }
          break
        default:
          null
      }
    },
    // eslint-disable-next-line
    closeModal(modalname, resetData) {
      this.openedModals[modalname] = false
      this.validationChecked = false
      if (resetData) {
        switch (modalname) {
          case 'addCategoryModal':
            {
              // Restore added item on clicking "No/Deny"
              this.addedItem = {
                data: {
                  name: null,
                  parentList: [],
                },
                parentCategoryList: {
                  parentListSearcherDefaultServerOptions: {
                    page: 1,
                    rowsPerPage: 50,
                  },
                  options: [],
                  loading: true,
                },
                languageList: {
                  languageSearcherDefaultServerOptions: {
                    page: 1,
                    rowsPerPage: 10,
                  },
                  options: [],
                  loading: true,
                },
              }
            }
            break
          default:
            null
        }
      }
    },
    async getCategories(pageOptions) {
      this.categoryTable.loading = true
      const response = await this.getAllCategories(pageOptions)
      this.items = response.data
      this.categoryTable.serverItemsLength = response.totalElements
      this.categoryTable.loading = false
    },
    createToast(content, color, isautoHided, classes, delay) {
      this.toasts.push({
        content: content,
        color: color,
        autohide: isautoHided,
        classes: classes,
        delay: delay,
      })
    },
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
