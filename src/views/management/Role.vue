<template>
  <CRow>
    <CModal size="lg" :visible="openedModals[0]" @close="closeModal(0)">
      <CModalHeader>
        <CModalTitle>Rol Ekle</CModalTitle>
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
            <CFormLabel for="add-rol-name">Rol adı</CFormLabel>
            <CFormInput
              id="add-rol-name"
              required
              feedbackInvalid="Lütfen bir rol adı giriniz"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(0)">Kapat</CButton>
            <CButton color="success" type="submit">Kaydet</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal size="md" :visible="openedModals[1]" @close="closeModal(1)">
      <CModalHeader>
        <CModalTitle>Rol <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Rol bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal(0)">Kapat</CButton>
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <CModal size="lg" :visible="openedModals[2]" @close="closeModal(2)">
      <CModalHeader>
        <CModalTitle>Rol Bilgilerini Düzenle</CModalTitle>
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
            <CFormLabel for="update-rol-name">Rol İsmi</CFormLabel>
            <CFormInput
              id="update-rol-name"
              required
              feedbackInvalid="Lütfen bir rol ismi giriniz"
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
    <CModal size="lg" :visible="openedModals[3]" @close="closeModal(3)">
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
            <CFormLabel for="add-user-firstName">İsim</CFormLabel>
            <CFormInput
              id="add-user-firstname"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-user-lastName">Soyisim</CFormLabel>
            <CFormInput
              id="add-user-lastName"
              required
              feedbackInvalid="Lütfen bir soyisim giriniz"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-user-email">Email</CFormLabel>
            <CFormInput
              id="add-user-email"
              required
              feedbackInvalid="Lütfen bir Email adresi giriniz"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-user-role">Rol</CFormLabel>
            <CFormInput
              id="add-user-role"
              required
              feedbackInvalid="Lütfen bir rol adı giriniz"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-user-password">Şifre</CFormLabel>
            <CFormInput
              id="add-user-password"
              required
              feedbackInvalid="Lütfen bir şifre giriniz"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(3)">Kapat</CButton>
            <CButton color="success" type="submit">Kaydet</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal size="lg" :visible="openedModals[4]" @close="closeModal(4)">
      <CModalHeader>
        <CModalTitle>Kullanıcı Bilgilerini Göster</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CCardBody class="p-0">
          <easy-data-table
            class="m-4"
            show-index
            v-model:itemsSelected="itemsSelected"
            :headers="headers2"
            :items="items2"
            :theme-color="themeColor"
            buttons-pagination
            :rows-per-page="rowsPerPage"
          >
            <template #item-operations>
              <div>
                <CButtonGroup role="group" size="sm">
                  <CModal
                    size="md"
                    :visible="openedModals[5]"
                    @close="closeModal(5)"
                  >
                    <CModalHeader>
                      <CModalTitle
                        >User <span class="text-danger">Sil</span></CModalTitle
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
                        <CButton color="secondary" @click="closeModal(5)"
                          >Kapat</CButton
                        >
                        <CButton color="danger" type="submit">SİL</CButton>
                      </CModalFooter>
                    </CModalBody>
                  </CModal>

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

          <CButton color="secondary" class="float-md-end" @click="closeModal(4)"
            >Kapat</CButton
          >
        </CCardBody>
      </CModalBody>
    </CModal>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Rol Listesi</h2>
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
                  <CButton
                    color="success"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Kullanıcılar',
                      placement: 'top',
                    }"
                    @click="
                      () => {
                        openedModals[4] = true
                      }
                    "
                  >
                    <CIcon icon="cil-user" />
                  </CButton>
                  <CButton
                    color="info"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Kullanıcı Ekle',
                      placement: 'top',
                    }"
                    @click="
                      () => {
                        openedModals[3] = true
                      }
                    "
                  >
                    <CIcon icon="cil-user-plus" />
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
        { text: 'Rol Adı', value: 'name', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [
        {
          name: 'admin',
        },
        {
          name: 'doctor',
        },
      ],
      headers2: [
        { text: 'İsim', value: 'firstName', sortable: true },
        { text: 'Soyisim', value: 'lastName', sortable: true },
        { text: 'Email', value: 'email', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      items2: [
        {
          firstName: 'ALi',
          lastName: 'Akkuş',
          email: 'ali@gmail.com',
        },
        {
          firstName: 'ALi',
          lastName: 'Akkuş',
          email: 'ali@gmail.com',
        },
      ],

      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {
        addRoleModal: false,
        deleteRoleModal: false,
        updateRoleModal: false,
        addUserModal: false,
        showUserModal: false,
        deleteUserModal: false,
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
