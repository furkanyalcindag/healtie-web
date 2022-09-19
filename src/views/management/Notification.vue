<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Bildirimler</h2>
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
                  <CModalTitle>Bildirim Ekle</CModalTitle>
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
                      <CFormLabel for="add-notification-title"
                        >Başlık</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-title"
                        required
                        feedbackInvalid="Lütfen bir başlık giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-message"
                        >Mesaj</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-message"
                        required
                        feedbackInvalid="Lütfen bir mesaj giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-link">Link</CFormLabel>
                      <CFormInput
                        id="add-notification-link"
                        required
                        feedbackInvalid="Lütfen bir link giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-image"
                        >Resim Yükle</CFormLabel
                      >
                      <CInputGroup class="mb-3">
                        <CFormInput type="file" id="inputGroupFile02" />
                        <CInputGroupText
                          component="label"
                          required
                          for="inputGroupFile02"
                          >Yükle</CInputGroupText
                        >
                      </CInputGroup>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-toWho"
                        >Kime?</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-toWho"
                        required
                        feedbackInvalid="Lütfen bir değer giriniz"
                      />
                    </CCol>
                    <CCol md="12">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                          >Gönderildi mi?</label
                        >
                      </div>
                    </CCol>
                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(0)"
                        >Kapat</CButton
                      >
                      <CButton color="success" type="submit">Kaydet</CButton>
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
                  <CModalTitle> Düzenle</CModalTitle>
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
                      <div
                        class="rounder d-flex justify-content-center align-items-center"
                        style="height: 9rem"
                      >
                        <CAvatar
                          :src="avatar"
                          status="success"
                          style="transform: scale(4)"
                        >
                        </CAvatar>
                      </div>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-image"
                        >Resim Yükle</CFormLabel
                      >
                      <CInputGroup class="mb-3">
                        <CFormInput type="file" id="inputGroupFile02" />
                        <CInputGroupText
                          component="label"
                          required
                          for="inputGroupFile02"
                          >Yükle</CInputGroupText
                        >
                      </CInputGroup>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-title"
                        >Başlık</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-title"
                        required
                        feedbackInvalid="Lütfen bir başlık giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-message"
                        >Mesaj</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-message"
                        required
                        feedbackInvalid="Lütfen bir mesaj giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-link">Link</CFormLabel>
                      <CFormInput
                        id="add-notification-link"
                        required
                        feedbackInvalid="Lütfen bir link giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-notification-toWho"
                        >Kime?</CFormLabel
                      >
                      <CFormInput
                        id="add-notification-toWho"
                        required
                        feedbackInvalid="Lütfen bir değer giriniz"
                      />
                    </CCol>
                    <CCol md="12">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckDefault"
                          >Gönderildi mi?</label
                        >
                      </div>
                    </CCol>
                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(2)"
                        >Kapat</CButton
                      >
                      <CButton color="success" type="submit">
                        Düzenlemeyi Kaydet</CButton
                      >
                    </CModalFooter>
                  </CForm>
                </CModalBody>
              </CModal>
              <CModal
                size="lg"
                :visible="openedModals[1]"
                @close="closeModal(1)"
              >
                <CModalHeader>
                  <CModalTitle
                    >Bildirimi <span class="text-danger">Sil</span></CModalTitle
                  >
                </CModalHeader>
                <CModalBody>
                  <h5>
                    Bu işlemi geri alamazsınız. Bildirim bilgilerini
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
            <template #item-image="{ image }">
              <CAvatar
                class="image-rounder"
                shape="rounded"
                :src="image"
                style="margin: 12px"
              />
            </template>

            <template #item-message="{ message }">
              <CTooltip :content="message" placement="top">
                <template #toggler="{ on }">
                  <div
                    v-on="on"
                    style="max-width: 150px"
                    class="d-inline-block text-truncate"
                  >
                    {{ message }}
                  </div>
                </template>
              </CTooltip>
            </template>
            <template #item-link="{ link }">
              <CTooltip :content="link" placement="top">
                <template #toggler="{ on }">
                  <div
                    v-on="on"
                    style="max-width: 150px"
                    class="d-inline-block text-truncate"
                  >
                    {{ link }}
                  </div>
                </template>
              </CTooltip>
            </template>
            <template #item-send="{ send }">
              <CTooltip :content="send" placement="top">
                <template #toggler="{ send }">
                  <div class="form-check form-switch form-check-reverse">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckReverse"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckReverse"
                    ></label>
                  </div>
                  {{ send }}
                </template>
              </CTooltip>
            </template>
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
        { text: 'Resim', value: 'image' },
        { text: 'Başlık', value: 'title', sortable: true },
        { text: 'Mesaj', value: 'message', sortable: true },
        { text: 'Link', value: 'link' },
        { text: 'Gönderildi mi?', value: 'send' },

        { text: 'Kime Gönderildi?', value: 'toWho', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [
        {
          title: 'ayar',
          message:
            'cvbfgddfffffffffffffdfsgfdgfdgfffffffffffffffffffffffffffffffffffffffffffffffg',
          link: 'ssfddfgfgerg5erg56er5t1egf',
          send: true,
          image:
            'https://ts2.mm.bing.net/th?q=Eba%27ya%20konulacak%20profil%20resmi',
          toWho: 'lkfdd',
        },
        {
          title: 'ayar',
          message: 'cvbfgdfg',
          link: 'asdsad',
          send: 'True',
          image:
            'https://ts2.mm.bing.net/th?q=Eba%27ya%20konulacak%20profil%20resmi',
          toWho: 'lkfdd',
        },
        {
          title: 'ayar',
          message: 'cvbfgdfg',
          link: 'asdsad',
          send: 'True',
          image:
            'https://ts2.mm.bing.net/th?q=Eba%27ya%20konulacak%20profil%20resmi',
          toWho: 'lkfdd',
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
.image-rounder {
  min-height: 30px !important;
  min-width: 30px !important;
}
</style>
