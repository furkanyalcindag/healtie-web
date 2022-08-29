<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Kullanıcı Listesi</h2>
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
                  <CModalTitle>Kullanıcı Ekle</CModalTitle>
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
                      <CFormLabel for="add-user-userName"
                        >Kullanıcı Adı</CFormLabel
                      >
                      <CFormInput
                        id="add-user-userName"
                        required
                        feedbackInvalid="Lütfen bir kullanıcı adı giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-user-firstName">İsim</CFormLabel>
                      <CFormInput
                        id="add-user-firstName"
                        required
                        feedbackInvalid="Lütfen bir isim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-user-lastName">Soyisim</CFormLabel>
                      <CFormInput
                        id="add-user-lastName"
                        required
                        feedbackInvalid="Lütfen bir soyisim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-user-email">Email</CFormLabel>
                      <CFormInput
                        id="add-user-email"
                        type="email"
                        required
                        feedbackInvalid="Lütfen bir email giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-user-role">Rol</CFormLabel>
                      <CFormSelect
                        id="add-user-role"
                        required
                        feedbackInvalid="Lütfen Rol seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Admin</option>
                        <option value="1">Doktor</option>
                      </CFormSelect>
                    </CCol>

                    <CCol md="6">
                      <CFormLabel for="add-user-ageRangeEnum"
                        >Yaş Aralığı</CFormLabel
                      >
                      <CFormSelect
                        id="add-user-age"
                        required
                        feedbackInvalid="Lütfen yaş aralığı seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">18-24</option>
                      </CFormSelect>
                    </CCol>

                    <CCol md="6">
                      <CFormLabel for="add-user-genderEnum"
                        >Cinsiyet</CFormLabel
                      >
                      <CFormSelect
                        id="add-user-genderEnum"
                        required
                        feedbackInvalid="Lütfen Cinsiyet seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Kadın</option>
                      </CFormSelect>
                    </CCol>
                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(0)"
                        >Kapat</CButton
                      >
                      <CButton color="success" type="submit"
                        >Değişiklikleri Kaydet</CButton
                      >
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
                  <CModalTitle>Kullanıcı Düzenle</CModalTitle>
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
                      <CFormLabel for="add-user-firstName">İsim</CFormLabel>
                      <CFormInput
                        id="add-user-firstName"
                        required
                        feedbackInvalid="Lütfen bir isim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-user-lastName">Soyisim</CFormLabel>
                      <CFormInput
                        id="add-user-lastName"
                        required
                        feedbackInvalid="Lütfen bir soyisim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-user-userName"
                        >Kullanıcı Adı</CFormLabel
                      >
                      <CFormInput
                        id="add-user-userName"
                        required
                        feedbackInvalid="Lütfen bir kullanıcı adı giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-user-email">Email</CFormLabel>
                      <CFormInput
                        id="add-user-email"
                        type="email"
                        required
                        feedbackInvalid="Lütfen bir email giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-user-role">Rol</CFormLabel>
                      <CFormSelect
                        id="add-user-role"
                        required
                        feedbackInvalid="Lütfen Rol seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Admin</option>
                        <option value="1">Doktor</option>
                      </CFormSelect>
                    </CCol>

                    <CCol md="6">
                      <CFormLabel for="add-user-ageRangeEnum"
                        >Yaş Aralığı</CFormLabel
                      >
                      <CFormSelect
                        id="add-user-age"
                        required
                        feedbackInvalid="Lütfen yaş aralığı seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">18-24</option>
                      </CFormSelect>
                    </CCol>

                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch">Cinsiyet</CFormLabel>
                      <CFormSelect
                        id="add-user-gender"
                        required
                        feedbackInvalid="Lütfen Cinsiyet seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Kadın</option>
                      </CFormSelect>
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
              <CModal
                size="md"
                :visible="openedModals[1]"
                @close="closeModal(1)"
              >
                <CModalHeader>
                  <CModalTitle
                    >Kullanıcı <span class="text-danger">Sil</span></CModalTitle
                  >
                </CModalHeader>
                <CModalBody>
                  <h5>
                    Bu işlemi geri alamazsınız. Kullanıcı bilgilerini
                    <span class="text-danger fw-bolder">
                      silmek istiyor musunuz?
                    </span>
                  </h5>
                  <CModalFooter class="pe-0">
                    <CButton color="secondary" @click="closeModal(1)"
                      >Kapat</CButton
                    >
                    <CButton color="danger" type="submit">SİL</CButton>
                  </CModalFooter>
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
        { text: 'İsim', value: 'firstName', sortable: true },
        { text: 'Soyisim', value: 'lastName', sortable: true },
        { text: 'Rol', value: 'role', sortable: true },
        { text: 'Kullanıcı Adı', value: 'userName' },
        { text: 'Yaş Aralığı', value: 'ageRangeEnum' },
        { text: 'Cinsiyet', value: 'genderEnum' },
        { text: 'Email', value: 'email' },
        { text: 'Makale Sayısı', value: 'articleCount' },
        { text: 'Beğenme Sayısı', value: 'likedCount' },
        { text: 'Kaydetme Sayısı', value: 'savedCount' },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          role: 'doctor',
          userName: 'doctorStephen',
          ageRangeEnum: '25-34',
          genderEnum: 'MALE',
          email: 'stephen@gmail.com',
          articleCount: '22',
          likedCount: '5',
          savedCount: '7',
        },
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          role: 'doctor',
          userName: 'doctorStephen',
          ageRangeEnum: '25-34',
          genderEnum: 'MALE',
          email: 'stephen@gmail.com',
          articleCount: '22',
          likedCount: '5',
          savedCount: '7',
        },
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          role: 'doctor',
          userName: 'doctorStephen',
          ageRangeEnum: '25-34',
          genderEnum: 'MALE',
          email: 'stephen@gmail.com',
          articleCount: '22',
          likedCount: '5',
          savedCount: '7',
        },
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          role: 'doctor',
          userName: 'doctorStephen',
          ageRangeEnum: '25-34',
          genderEnum: 'MALE',
          email: 'stephen@gmail.com',
          articleCount: '22',
          likedCount: '5',
          savedCount: '7',
        },
      ],
      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {
        addUserModal: false,
        deleteUserModal: false,
        updateUserModal: false,
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
