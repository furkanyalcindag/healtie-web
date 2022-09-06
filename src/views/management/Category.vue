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
                @click="showModal('addCategoryModal')"
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
                    @click="setSelectedCategory('updateCategoryModal', item)"
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
                    @click="setSelectedCategory('deleteCategoryModal', item)"
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
            isAbleToPushButton
              ? checkValidation($event, 'addCategoryModal', addedItem.data)
              : null
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
          <CFormLabel for="add-category-parent-category"
            >Üst kategorileri</CFormLabel
          >
          {{ addedItem.data }}
          <v-select
            id="add-category-parent-category"
            v-model="addedItem.data.parentList"
            :options="parentCategoryList.options"
            label="name"
            multiple
            @search="(search) => get_Filtered_Parent_List_Options_Data(search)"
            :loading="parentCategoryList.loading"
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
          <CFormLabel for="add-language-to-category"
            >Üst kategorileri</CFormLabel
          >
          <v-select
            id="add-language-to-category"
            v-model="addedItem.data.language"
            :options="languageList.options"
            label="name"
            @search="(search) => get_Filtered_Language_Options_Data(search)"
            :loading="languageList.loading"
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
          <CButton
            color="danger"
            @click="
              isAbleToPushButton ? deleteCategory(selectedCategory.uuid) : null
            "
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
          @submit.prevent="checkValidation($event, 'updateCategoryModal')"
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
              v-model="editedItem.data.name"
            />
          </CCol>
          <!-- For category parent list multiple selection -->
          <CFormLabel for="add-category-parent-category"
            >Üst kategorileri</CFormLabel
          >
          <v-select
            id="add-category-parent-category"
            v-model="addedItem.data.parentList"
            :options="parentCategoryList.options"
            label="name"
            multiple
            @search="(search) => get_Filtered_Parent_List_Options_Data(search)"
            :loading="parentCategoryList.loading"
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
          <CFormLabel for="add-language-to-category"
            >Üst kategorileri</CFormLabel
          >
          <v-select
            id="add-language-to-category"
            v-model="addedItem.data.language"
            :options="languageList.options"
            label="name"
            @search="(search) => get_Filtered_Language_Options_Data(search)"
            :loading="languageList.loading"
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
import createCategoryDTO from '@/models/create_CATEGORY_dto'
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
        data: new createCategoryDTO(null, null, []),
      },
      editedItem: {
        // Real data
        data: new createCategoryDTO(null, null, []),
      },
      // Category Selection
      parentCategoryList: {
        // The parent category list inside selection in addCategory
        options: [],
        // Parent category Selection server options for getting options in selection in addCategory
        parentListSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 50,
        },
        loading: true,
      },
      // Language Selection
      languageList: {
        // The language list inside selection in addCategory
        options: [],
        // Language Selection server options for getting options in selection in addCategory
        languageSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        loading: true,
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
      selectedCategory: {},
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
      deleteCategoryAPI: 'category/deleteCategory',
    }),
    setSelectedCategory(modalname, data) {
      this.selectedCategory = JSON.parse(JSON.stringify(data))
      switch (modalname) {
        case 'updateCategoryModal':
          {
            this.editedItem.data = JSON.parse(JSON.stringify(data))
            console.log(JSON.parse(JSON.stringify(this.editedItem.data)))
          }
          break
        default:
          break
      }
      this.showModal(modalname)
    },
    async get_Filtered_Parent_List_Options_Data(searched) {
      this.parentCategoryList.loading = true
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
          this.parentCategoryList.parentListSearcherDefaultServerOptions,
          filterBy,
        )
        this.parentCategoryList.options = reduceDataHeaviless(response.data)
      } else {
        const response = await this.getAllCategories(
          this.parentCategoryList.parentListSearcherDefaultServerOptions,
        )
        this.parentCategoryList.options = reduceDataHeaviless(response.data)
      }
      this.parentCategoryList.loading = false
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
    async showModal(modalname) {
      switch (modalname) {
        case 'addCategoryModal':
          {
            this.parentCategoryList.loading = true
            this.languageList.loading = true
            this.get_Filtered_Parent_List_Options_Data()
            this.get_Filtered_Language_Options_Data()
            this.parentCategoryList.loading = false
            this.languageList.loading = false
          }
          break
        case 'updateCategoryModal':
          {
            this.parentCategoryList.loading = true
            this.languageList.loading = true
            this.get_Filtered_Parent_List_Options_Data()
            this.get_Filtered_Language_Options_Data()
            this.parentCategoryList.loading = false
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
          case 'addCategoryModal':
            {
              // Restore added item on clicking "No/Deny"
              this.addedItem = {
                data: new createCategoryDTO(null, null, []),
              }
            }
            break
        }
      }
    },
    async addCategory(data) {
      // Cleaning up data a little bit. Json parse for copying the object without connecting them together
      let cachedData = this.cleanCategorySelections(data)
      const response = await this.addCategoryAPI(cachedData)
      if (response === true) {
        this.createToast(
          'Category added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getCategories(this.categoryTable.serverOptions)
        this.closeModal('addCategoryModal', true)
      } else {
        this.createToast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
    },
    async deleteCategory(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteCategoryAPI(uuid)
      if (response === true) {
        this.selectedCategory = {}
        this.createToast(
          'Category deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
      } else {
        this.createToast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
      this.closeModal('deleteCategoryModal')
    },
    // Used in edit and add category to make the data to look better. DTO can be used instead
    cleanCategorySelections(data) {
      let cachedData = JSON.parse(JSON.stringify(data))
      let parentCategoryListUUIDS = cachedData.parentList.map(
        (parentcategory) => {
          return parentcategory.uuid
        },
      )
      cachedData.parentList = JSON.parse(
        JSON.stringify(parentCategoryListUUIDS),
      )
      // ITS NEEDED TO BE SETTED LANGUAGE.LANGUAGE HERE !! ******************************************************************PROBLEM********************************************************************
      // cachedData.language = cachedData.language.language
      cachedData.language = cachedData.language.name
      return cachedData
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
