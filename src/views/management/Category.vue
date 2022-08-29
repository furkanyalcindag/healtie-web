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
                    openedModals[0] = true
                  }
                "
                >Ekle</CButton
              >
              <CModal
                size="lg"
                :visible="openedModals[0]"
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
                      <CFormLabel for="add-category-name"
                        >Kategori Adı</CFormLabel
                      >
                      <CFormInput
                        id="add-category-name"
                        required
                        feedbackInvalid="Lütfen bir kategori adı giriniz"
                      />
                    </CCol>

                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(0)"
                        >Kapat</CButton
                      >
                      <CButton color="success" type="submit"> Kaydet</CButton>
                    </CModalFooter>
                  </CForm>
                </CModalBody>
              </CModal>

              <CModal
                size="lg"
                :visible="openedModals[2]"
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
                      <CFormLabel for="update-category-name"
                        >Kategori Adı</CFormLabel
                      >
                      <CFormInput
                        id="update-category-name"
                        required
                        feedbackInvalid="Lütfen bir kategori adı giriniz"
                      />
                    </CCol>
                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(2)"
                        >Kapat</CButton
                      >
                      <CButton color="success" type="submit"
                        >Değişiklikleri Kaydet</CButton
                      >
                    </CModalFooter>
                  </CForm>
                </CModalBody>
              </CModal>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class="p-0">
          <easy-data-table
            class="m-4"
            show-index
            v-model:itemsSelected="itemsSelected"
            :headers="headers"
            :items="items"
            :theme-color="themeColor"
            buttons-pagination
            :rows-per-page="rowsPerPage"
          >
            <template #item-operations>
              <div>
                <CButtonGroup role="group" size="sm">
                  <CModal
                    size="md"
                    :visible="openedModals[1]"
                    @close="closeModal(1)"
                  >
                    <CModalHeader>
                      <CModalTitle
                        >Kategori
                        <span class="text-danger">Sil</span></CModalTitle
                      >
                    </CModalHeader>
                    <CModalBody>
                      <h5>
                        Bu işlemi geri alamazsınız. Kategori bilgilerini
                        <span class="text-danger fw-bolder">
                          silmek istiyor musunuz?
                        </span>
                      </h5>
                      <CModalFooter class="pe-0">
                        <CButton color="secondary" @click="closeModal(0)"
                          >Kapat</CButton
                        >
                        <CButton color="danger" type="submit">SİL</CButton>
                      </CModalFooter>
                    </CModalBody>
                  </CModal>
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
                        openedModals[2] = true
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
                        openedModals[1] = true
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
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
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
      rowsPerPage: 10,
      openedModals: {
        addCategoryModal: false,
        deleteCategoryModal: false,
        updateCAtegoryModal: false,
      },
      isMounted: false,
      validationChecked: false,
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    checkValidation() {
      // Response
      this.validationChecked = true
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
