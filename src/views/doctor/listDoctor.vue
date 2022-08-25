<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Doktor Listesi</h2>
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
                  <CModalTitle>Doktor Ekle</CModalTitle>
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
                      <CFormLabel for="add-doctor-firstname">İsim</CFormLabel>
                      <CFormInput
                        id="add-doctor-firstname"
                        required
                        feedbackInvalid="Lütfen bir isim giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-lastname">Soyisim</CFormLabel>
                      <CFormInput
                        id="add-doctor-lastname"
                        required
                        feedbackInvalid="Lütfen bir soyisim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-doctor-username"
                        >Kullanıcı Adı</CFormLabel
                      >
                      <CFormInput
                        id="add-doctor-username"
                        required
                        feedbackInvalid="Lütfen kullanıcı adı giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-doctor-email">Email</CFormLabel>
                      <CFormInput
                        id="add-doctor-email"
                        type="email"
                        required
                        feedbackInvalid="Lütfen bir email giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch">Branş</CFormLabel>
                      <CFormSelect
                        id="add-doctor-branch"
                        required
                        feedbackInvalid="Lütfen branşı seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-clinicName"
                        >Klinik</CFormLabel
                      >
                      <CFormSelect
                        id="add-doctor-clinicName"
                        required
                        feedbackInvalid="Lütfen Klinik seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol xs="12">
                      <CFormLabel for="add-doctor-address">Adres</CFormLabel>
                      <CFormTextarea
                        id="add-doctor-address"
                        rows="3"
                        required
                        feedbackInvalid="Lütfen bir adres giriniz"
                      ></CFormTextarea>
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
                :visible="openedModals[3]"
                @close="closeModal(3)"
              >
                <CModalHeader>
                  <CModalTitle>Doktor Bilgilerini Göster</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm
                    class="row g-3"
                    @submit.prevent="checkValidation()"
                    needs-validation
                    novalidate
                    :validated="validationChecked"
                  >
                    <CCol md="12">
                      <div
                        class="d-flex text-center align-middle align-items-center"
                      >
                        <CImage
                          class="rounder"
                          fluid
                          align="center"
                          :src="avatar"
                          width="150"
                          height="150"
                        >
                        </CImage>
                      </div>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel
                        for="add-doctor-firstname"
                        class="fw-bolder me-2"
                        >İsim:</CFormLabel
                      >
                      İSİM
                    </CCol>
                    <CCol md="6">
                      <CFormLabel
                        for="add-doctor-firstname"
                        class="fw-bolder me-2"
                        >Soyisim:</CFormLabel
                      >
                      SOYİSİM
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel
                        for="add-doctor-username"
                        class="fw-bolder me-2"
                        >Email:</CFormLabel
                      >
                      EMAIL
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel
                        for="add-doctor-username"
                        class="fw-bolder me-2"
                        >Tel NO:</CFormLabel
                      >
                      Telefonu
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch" class="fw-bolder me-2"
                        >Branş:</CFormLabel
                      >
                      BRANŞ
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch" class="fw-bolder me-2"
                        >Klinik:</CFormLabel
                      >
                      KLİNİK
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch" class="fw-bolder me-2"
                        >Ünvan:</CFormLabel
                      >
                      ÜNVANI
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-branch" class="fw-bolder me-2"
                        >Diploma NO:</CFormLabel
                      >
                      DİPLOMA NUMARASI
                    </CCol>
                    <CCol xs md="12">
                      <CFormLabel for="add-doctor-branch" class="fw-bolder me-2"
                        >Adres:</CFormLabel
                      >
                      Ankara/Çankaya sdsjadjad jasdkjdasjkdsajkskjskj
                      kjasdjkasdkjdaadkjadsjkdjk
                      ajkldjskaldsjakljkladsjkldjkldsadsjjadsj
                      jasdjadsjkljkalsdjkasldskadjlsdajklsadjklasdjk
                    </CCol>
                    <CCol xs class="text-center">
                      <CFormLabel
                        for="add-doctor-branch"
                        class="fw-bolder me-2 bg-secondary p-1"
                        style="border-radius: 10px"
                        >AKADEMİK BİLGİLER:</CFormLabel
                      >
                      <CTable responsive hover>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col"
                              >Okul</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Uzmanlık Alanı</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Başlangıç tarihi</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Bitiş tarihi</CTableHeaderCell
                            >
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>@mdoASDAS</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Jacob</CTableDataCell>
                            <CTableDataCell>Thornton</CTableDataCell>
                            <CTableDataCell>@fat</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                            <CTableDataCell>Larry the Bird</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CCol>
                    <CCol xs md="12" class="text-center">
                      <CFormLabel
                        for="add-doctor-branch"
                        class="fw-bolder me-2 bg-secondary p-1"
                        style="border-radius: 10px"
                        >SERTİFİKALAR:</CFormLabel
                      >
                      <CTable responsive hover>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col"
                              >İsmi</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Numarası</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Alındığı yer</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Alındığı tarih</CTableHeaderCell
                            >
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>@mdoASDAS</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Jacob</CTableDataCell>
                            <CTableDataCell>Thornton</CTableDataCell>
                            <CTableDataCell>@fat</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                            <CTableDataCell>Larry the Bird</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CCol>
                    <CCol xs md="12" class="text-center">
                      <CFormLabel
                        for="add-doctor-branch"
                        class="fw-bolder me-2 bg-secondary p-1"
                        style="border-radius: 10px"
                        >TECRÜBELER:</CFormLabel
                      >
                      <CTable responsive hover>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col"
                              >Ünvan</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Çalıştığı yer</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >Açıklama</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >İşe başlama tarihi</CTableHeaderCell
                            >
                            <CTableHeaderCell scope="col"
                              >İş bitiş tarihi</CTableHeaderCell
                            >
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>
                              <div>
                                <div
                                  style="max-width: 100px"
                                  class="d-inline-block text-truncate"
                                  v-c-tooltip="{
                                    content: `${'AÇIKLAMA'}`,
                                    placement: 'top',
                                  }"
                                >
                                  AçıklamaASDJADSADAJSDASDJ
                                </div>
                              </div>
                            </CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CCol>

                    <CModalFooter class="pe-0">
                      <CButton color="secondary" @click="closeModal(3)"
                        >Tamam</CButton
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
                  <CModalTitle>Doktor Düzenle</CModalTitle>
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
                      <CFormLabel for="update-doctor-firstname"
                        >İsim</CFormLabel
                      >
                      <CFormInput
                        id="update-doctor-firstname"
                        required
                        feedbackInvalid="Lütfen bir isim giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="update-doctor-lastname"
                        >Soyisim</CFormLabel
                      >
                      <CFormInput
                        id="update-doctor-lastname"
                        required
                        feedbackInvalid="Lütfen bir soyisim giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="update-doctor-username"
                        >Kullanıcı Adı</CFormLabel
                      >
                      <CFormInput
                        id="update-doctor-username"
                        required
                        feedbackInvalid="Lütfen kullanıcı adı giriniz"
                      />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="update-doctor-email">Email</CFormLabel>
                      <CFormInput
                        id="update-doctor-email"
                        type="email"
                        required
                        feedbackInvalid="Lütfen bir email giriniz"
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="update-doctor-branch">Branş</CFormLabel>
                      <CFormSelect
                        id="update-doctor-branch"
                        required
                        feedbackInvalid="Lütfen branşı seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="update-doctor-clinicName"
                        >Klinik</CFormLabel
                      >
                      <CFormSelect
                        id="update-doctor-clinicName"
                        required
                        feedbackInvalid="Lütfen klinik seçiniz"
                      >
                        <option selected="" disabled="" value="">
                          Seçiniz...
                        </option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol xs="12">
                      <CFormLabel for="update-doctor-address">Adres</CFormLabel>
                      <CFormTextarea
                        id="update-doctor-address"
                        rows="3"
                        required
                        feedbackInvalid="Lütfen bir adres giriniz"
                      ></CFormTextarea>
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
            <template #loading>
              <img
                src="https://thumbs.gfycat.com/AngelicYellowIberianmole.webp"
                style="width: 60px; height: 100px"
              />
            </template>
            <template #item-doctor="{ doctor, profileImage }">
              <div>
                <CAvatar shape="rounded" :src="profileImage" size="md" />
                {{ doctor }}
              </div>
            </template>
            <template #item-address="{ address }">
              <div style="max-width: 175px">
                <CFormLabel
                  style="max-width: 175px"
                  color="secondary"
                  class="d-block text-truncate m-0"
                  v-c-tooltip="{
                    content: `${address}`,
                    placement: 'top',
                  }"
                  >{{ address }}</CFormLabel
                >
              </div>
            </template>
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
                        >Doktor
                        <span class="text-danger">Sil</span></CModalTitle
                      >
                    </CModalHeader>
                    <CModalBody>
                      <h5>
                        Bu işlemi geri alamazsınız. Doktor bilgilerini
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
                    color="info"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Detayları Göster',
                      placement: 'top',
                    }"
                    @click="
                      () => {
                        openedModals[3] = true
                      }
                    "
                  >
                    <CIcon icon="cil-hamburger-menu" />
                  </CButton>
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
          <!-- <CTable striped hover bordered class="p-0 m-0">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">İsim</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ünvan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Dal</CTableHeaderCell>
                <CTableHeaderCell scope="col">Klinik</CTableHeaderCell>
                <CTableHeaderCell scope="col">Diploma NO</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tel NO</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kullanıcı Adı</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
                <CTableDataCell>@fat</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Larry the Bird</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable> -->
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
        { text: 'Branş', value: 'branch', sortable: true },
        { text: 'Ünvan', value: 'title' },
        { text: 'Diploma NO', value: 'diplomaNo' },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          profileImage:
            'https://ts2.mm.bing.net/th?q=Eba%27ya%20konulacak%20profil%20resmi',
          branch: 'Kalp Damar',
          title: 'Uzm. Dr.',

          diplomaNo: '231654',
        },
        {
          firstName: 'Stephen',
          lastName: 'Jhon',
          profileImage:
            'https://ts2.mm.bing.net/th?q=Eba%27ya%20konulacak%20profil%20resmi',
          branch: 'Kalp Damar',
          title: 'Uzm. Dr.',

          diplomaNo: '54611',
        },
      ],
      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {
        addDoctorModal: false,
        deleteDoctorModal: false,
        updateDoctorModal: false,
        infoDoctorModal: false,
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
