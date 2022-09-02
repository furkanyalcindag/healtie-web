<template>
  <CRow>
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
                @click="
                  () => {
                    openedModals.addCategoryModal = true
                  }
                "
                >Ekle</CButton
              >
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class="p-0">
          <easy-data-table
            class="m-4"
            show-index
            v-model:server-options="categoryTable.serverOptions"
            v-model:itemsSelected="itemsSelected"
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
      size="lg"
      :visible="openedModals.addCategoryModal"
      @close="closeModal(0)"
    >
      <CModalHeader>
        <CModalTitle>Kategori Ekle</CModalTitle>
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
            <CFormLabel for="add-category-name">Kategori Adı</CFormLabel>
            <CFormInput
              id="add-category-name"
              required
              feedbackInvalid="Lütfen bir kategori adı giriniz"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(0)">Kapat</CButton>
            <CButton color="success" type="submit"> Kaydet</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Delete category -->
    <CModal
      size="lg"
      :visible="openedModals.deleteCategoryModal"
      @close="closeModal(1)"
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
          <CButton color="secondary" @click="closeModal(0)">Kapat</CButton>
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Update category -->
    <CModal
      size="lg"
      :visible="openedModals.updateCategoryModal"
      @close="closeModal(2)"
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
            <CButton color="secondary" @click="closeModal(2)">Kapat</CButton>
            <CButton color="success" type="submit"
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
    }
  },
  created() {
    this.getCategories(this.categoryTable.serverOptions)
  },
  methods: {
    ...mapActions({
      getAllCategories: 'category/getCategories',
    }),
    // eslint-disable-next-line
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
        default:
          null
      }
      this.isAbleToPushButton = true
    },
    // eslint-disable-next-line
    closeModal(modalname, resetData) {
      this.openedModals[modalname] = false
      this.validationChecked = false
      if (resetData) {
        switch (modalname) {
          default:
            null
        }
      }
    },
    async getCategories(pageOptions) {
      this.categoryTable.loading = true
      const response = await this.getAllCategories(pageOptions)
      this.items = response.data
      console.log(response)
      this.categoryTable.serverItemsLength = response.totalElements
      this.categoryTable.loading = false
    },
    // eslint-disable-next-line
    addCategory(data) {},
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
