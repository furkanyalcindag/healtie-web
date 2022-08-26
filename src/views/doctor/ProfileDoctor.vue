<template>
  <CRow>
    <CModal size="lg" :visible="openedModals[0]" @close="closeModal(0)">
      <CModalHeader>
        <CModalTitle>Profilimi Düzenle</CModalTitle>
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
            <CFormLabel for="update-doctor-firstname">İsim</CFormLabel>
            <CFormInput
              id="update-doctor-firstname"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedProfileData.firstName"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-doctor-lastname">Soyisim</CFormLabel>
            <CFormInput
              id="update-doctor-lastname"
              required
              feedbackInvalid="Lütfen bir soyisim giriniz"
              v-model="editedProfileData.lastName"
            />
          </CCol>
          <CCol xs="6">
            <CFormLabel for="update-doctor-username">Kullanıcı Adı</CFormLabel>
            <CFormInput
              id="update-doctor-username"
              required
              feedbackInvalid="Lütfen kullanıcı adı giriniz"
              v-model="editedProfileData.email"
              disabled
            />
          </CCol>
          <CCol xs="6">
            <CFormLabel for="update-doctor-phone">Tel NO</CFormLabel>
            <CFormInput
              id="update-doctor-phone"
              type="tel"
              :pattern="'[0-9]{3}-[0-9]{2}-[0-9]{3}'"
              required
              feedbackInvalid="Lütfen bir telefon numarası giriniz"
              v-model="editedProfileData.phone"
            />
          </CCol>
          <CCol xs="12">
            <CFormLabel for="update-doctor-email">Email</CFormLabel>
            <CFormInput
              id="update-doctor-email"
              type="email"
              required
              feedbackInvalid="Lütfen bir email giriniz"
              v-model="editedProfileData.email"
            />
          </CCol>
          <CCol xs="12">
            <CFormLabel for="update-doctor-address">Adres</CFormLabel>
            <CFormTextarea
              id="update-doctor-address"
              rows="3"
              required
              feedbackInvalid="Lütfen bir adres giriniz"
              v-model="editedProfileData.address"
            ></CFormTextarea>
          </CCol>
          <CCol xs="12">
            <CFormLabel for="update-doctor-about">Hakkımda</CFormLabel>
            <CFormTextarea
              id="update-doctor-about"
              rows="10"
              v-model="editedProfileData.about"
            ></CFormTextarea>
          </CCol>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(0, true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal size="lg" :visible="openedModals[1]" @close="closeModal(1)">
      <CModalHeader>
        <CModalTitle>Doktora Bilgilerimi Düzenle</CModalTitle>
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
            <CFormLabel for="update-doctor-title">Ünvan</CFormLabel>
            <CFormSelect
              id="update-doctor-title"
              required
              feedbackInvalid="Lütfen branşı seçiniz"
              v-model="editedDoctorData.title"
            >
              <option selected="" disabled="" value="">Seçiniz...</option>
              <option value="Uzman">Uzman</option>
            </CFormSelect>
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-doctor-branch">Branş</CFormLabel>
            <CFormSelect
              id="update-doctor-branch"
              required
              feedbackInvalid="Lütfen branşı seçiniz"
              v-model="editedDoctorData.branch"
            >
              <option selected="" disabled="" value="">Seçiniz...</option>
              <option value="Beyin Cerrahı">Beyin Cerrahı</option>
            </CFormSelect>
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-doctor-firstname">Klinik</CFormLabel>
            <CFormInput
              id="update-doctor-firstname"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedDoctorData.clinicName"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-doctor-firstname">İsim</CFormLabel>
            <CFormInput
              id="update-doctor-firstname"
              type="number"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedDoctorData.diplomaNo"
            />
          </CCol>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(1, true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal size="lg" :visible="openedModals[2]" @close="closeModal(2)">
      <CModalHeader>
        <CModalTitle>Akademik Bilgilerimi Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="checkValidation()"
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CTable
            responsive
            hover
            class="bg-white mb-0"
            style="border-color: #321fdb"
          >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Okul</CTableHeaderCell>
                <CTableHeaderCell scope="col">Uzmanlık Alanı</CTableHeaderCell>
                <CTableHeaderCell scope="col"
                  >Başlangıç tarihi</CTableHeaderCell
                >
                <CTableHeaderCell scope="col">Bitiş tarihi</CTableHeaderCell>
                <CTableHeaderCell scope="col">İşlemler</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">+</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="addedAcademicData.schoolName"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="addedAcademicData.profession"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="addedAcademicData.startYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="addedAcademicData.graduateYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="success"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Ekle',
                      placement: 'top',
                    }"
                    @click="addAcademicData(school)"
                  >
                    <CIcon icon="cil-plus" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow
                v-for="(school, index) in editedAcademicData"
                :key="index"
              >
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="school.schoolName"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="school.profession"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="school.startYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="school.graduateYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="danger"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Sil',
                      placement: 'top',
                    }"
                    @click="deleteAcademicData(school)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(2, true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal size="lg" :visible="openedModals[3]" @close="closeModal(3)">
      <CModalHeader>
        <CModalTitle>Sertifika Bilgilerimi Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="checkValidation()"
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CTable
            responsive
            hover
            class="bg-white mb-0"
            style="border-color: #321fdb"
          >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">İsmi</CTableHeaderCell>
                <CTableHeaderCell scope="col">Numarası</CTableHeaderCell>
                <CTableHeaderCell scope="col">Alındığı yer</CTableHeaderCell>
                <CTableHeaderCell scope="col">Alındığı tarih</CTableHeaderCell>
                <CTableHeaderCell scope="col">İşlemler</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">+</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="addedCertificateData.name"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir numara giriniz"
                    v-model="addedCertificateData.certificateNo"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen alındığı yeri giriniz"
                    v-model="addedCertificateData.takenFrom"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="addedCertificateData.takenDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="success"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Ekle',
                      placement: 'top',
                    }"
                    @click="addCertificateData(certificate)"
                  >
                    <CIcon icon="cil-plus" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow
                v-for="(certificate, index) in editedCertificateData"
                :key="index"
              >
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir isim giriniz"
                    v-model="certificate.name"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir numara giriniz"
                    v-model="certificate.certificateNo"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen alındığı yeri giriniz"
                    v-model="certificate.takenFrom"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="certificate.takenDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="danger"
                    class="ms-2 text-white align-items-center"
                    shape="rounded-pill"
                    size="sm"
                    v-c-tooltip="{
                      content: 'Sil',
                      placement: 'top',
                    }"
                    @click="deleteCertificateData(certificate)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal(3, true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader class="pb-0">
          <CCol class="text-left mt-3">
            <span class="h2" id="doctor-profile">Profilim</span>
            <CNav
              variant="tabs"
              class="float-end align-bottom justify-content-center"
              style="transform: translateY(1px)"
            >
              <CNavItem>
                <CNavLink
                  class="text-secondary"
                  role="button"
                  @click="scrollToSpecifiedElement('doctor-profile')"
                >
                  Profilim
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  class="text-secondary"
                  role="button"
                  @click="scrollToSpecifiedElement('doctor-academic')"
                  >Akademik</CNavLink
                >
              </CNavItem>
              <CNavItem>
                <CNavLink
                  class="text-secondary"
                  role="button"
                  @click="scrollToSpecifiedElement('doctor-certificate')"
                  >Sertifika</CNavLink
                >
              </CNavItem>
              <CNavItem>
                <CNavLink
                  class="text-secondary"
                  role="button"
                  @click="scrollToSpecifiedElement('doctor-experience')"
                  >Tecrübe</CNavLink
                >
              </CNavItem>
              <CNavItem>
                <CNavLink
                  class="text-secondary"
                  role="button"
                  @click="scrollToSpecifiedElement('doctor-article')"
                  >Makale</CNavLink
                >
              </CNavItem>
            </CNav>
          </CCol>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol :sm="12" :md="4" class="mb-3">
              <CCard>
                <CCardBody>
                  <CCardTitle>
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
                    <CButton
                      color="warning"
                      class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                      shape="rounded-pill"
                      size="sm"
                      v-c-tooltip="{
                        content: 'Düzenle',
                        placement: 'top',
                      }"
                      @click="
                        () => {
                          openedModals[0] = true
                        }
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                  </CCardTitle>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem
                    ><span class="fw-bolder">İsim:</span>
                    {{ profileData.firstName || 'Yükleniyor...' }}
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Soyisim:</span>
                    {{ profileData.lastName || 'Yükleniyor...' }}
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Email(Kullanıcı):</span>
                    {{ profileData.email || 'Yükleniyor...' }}
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Tel NO:</span>
                    {{ profileData.phone || 'Yükleniyor...' }}
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Adres:</span>
                    {{ profileData.address || 'Yükleniyor...' }}
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol :sm="12" :md="8">
              <CRow class="align-self-start">
                <CCol class="align-self-start" :sm="12">
                  <CCallout
                    color="primary"
                    class="position-relative mt-0 me-0 ms-0"
                  >
                    <CButton
                      color="warning"
                      class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                      shape="rounded-pill"
                      size="sm"
                      v-c-tooltip="{
                        content: 'Düzenle',
                        placement: 'top',
                      }"
                      @click="
                        () => {
                          openedModals[1] = true
                        }
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                    <h5>Doktora Bilgileri</h5>
                    <CListGroup flush style="min-height: 10.2rem">
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Ünvan:</span></CCol
                          >
                          <CCol :sm="10">{{
                            doctorData.title || 'Yükleniyor...'
                          }}</CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Branş:</span></CCol
                          >
                          <CCol :sm="10">{{
                            doctorData.branch || 'Yükleniyor...'
                          }}</CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Klinik:</span></CCol
                          >
                          <CCol :sm="10">{{
                            doctorData.clinicName || 'Yükleniyor...'
                          }}</CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Diploma NO:</span></CCol
                          >
                          <CCol :sm="10">
                            {{ doctorData.diplomaNo || 'Yükleniyor...' }}</CCol
                          >
                        </CRow>
                      </CListGroupItem>
                    </CListGroup>
                  </CCallout>
                  <CCallout
                    color="primary"
                    class="position-relative mt-0 me-0 ms-0 mb-3"
                  >
                    <h5>Hakkımda</h5>
                    <CListGroup flush style="min-height: 8rem">
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="12">{{
                            profileData.about || 'Yükleniyor...'
                          }}</CCol>
                        </CRow>
                      </CListGroupItem>
                    </CListGroup>
                    <CButton
                      color="warning"
                      class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                      shape="rounded-pill"
                      size="sm"
                      v-c-tooltip="{
                        content: 'Düzenle',
                        placement: 'top',
                      }"
                      @click="
                        () => {
                          openedModals[0] = true
                        }
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                  </CCallout>
                  <!-- <CCard>
                    <CCardBody>
                      <CCardTitle>Doktora bilgileri</CCardTitle>
                      <CCardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CCardText>
                    </CCardBody>
                  </CCard> -->
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CRow class="align-self-start">
                <CCol class="align-self-start" :sm="12">
                  <CCard
                    id="doctor-academic"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="warning"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
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
                        <h5>Akademik Bilgileri</h5>
                      </CCol>
                    </CCardHeader>
                    <CTable
                      responsive
                      hover
                      class="border border-2 bg-white mb-0"
                      style="border-color: #321fdb"
                    >
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Okul</CTableHeaderCell>
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
                        <CTableRow
                          v-for="(school, index) in academicData"
                          :key="index"
                        >
                          <CTableHeaderCell scope="row">{{
                            index + 1
                          }}</CTableHeaderCell>
                          <CTableDataCell>{{
                            school.schoolName
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            school.profession
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            school.startYear
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            school.graduateYear
                          }}</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCard>
                  <CCard
                    id="doctor-certificate"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="warning"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                          shape="rounded-pill"
                          size="sm"
                          v-c-tooltip="{
                            content: 'Düzenle',
                            placement: 'top',
                          }"
                          @click="
                            () => {
                              openedModals[3] = true
                            }
                          "
                        >
                          <CIcon icon="cil-pencil" />
                        </CButton>
                        <h5>Sertifikaları</h5>
                      </CCol>
                    </CCardHeader>
                    <CTable
                      responsive
                      hover
                      class="border border-2 bg-white mb-0"
                      style="border-color: #321fdb"
                    >
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">İsmi</CTableHeaderCell>
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
                        <CTableRow
                          v-for="(certificate, index) in certificateData"
                          :key="index"
                        >
                          <CTableHeaderCell scope="row">{{
                            index + 1
                          }}</CTableHeaderCell>
                          <CTableDataCell>{{
                            certificate.name
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            certificate.certificateNo
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            certificate.takenFrom
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            certificate.takenDate
                          }}</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCard>
                  <CCard
                    id="doctor-experience"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="warning"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                          shape="rounded-pill"
                          size="sm"
                          v-c-tooltip="{
                            content: 'Düzenle',
                            placement: 'top',
                          }"
                          @click="
                            () => {
                              openedModals[1] = true
                            }
                          "
                        >
                          <CIcon icon="cil-pencil" />
                        </CButton>
                        <h5>Tecrübeleri</h5>
                      </CCol>
                    </CCardHeader>
                    <CTable
                      responsive
                      hover
                      class="border border-2 bg-white mb-0"
                      style="border-color: #321fdb"
                    >
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Ünvan</CTableHeaderCell>
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
                  </CCard>
                  <CCard
                    id="doctor-article"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="warning"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                          shape="rounded-pill"
                          size="sm"
                          v-c-tooltip="{
                            content: 'Düzenle',
                            placement: 'top',
                          }"
                          @click="
                            () => {
                              openedModals[1] = true
                            }
                          "
                        >
                          <CIcon icon="cil-pencil" />
                        </CButton>
                        <h5>Makaleleri</h5>
                      </CCol>
                    </CCardHeader>
                    <CTable
                      responsive
                      hover
                      class="border border-2 bg-white mb-0"
                      style="border-color: #321fdb"
                    >
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Ünvan</CTableHeaderCell>
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
                  </CCard>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'Colors',
  data() {
    return {
      avatar: avatar,
      profileData: {
        firstName: 'AHMET',
        lastName: 'KOÇ',
        email: 'kullanıcı@gmail.com',
        phone: '+90 542 103 20 65',
        address: 'Ankara/Çankaya Mahalle Mah. Cadde Cad. Apt/Daire 144/7',
        about:
          'ASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSDASDDSD',
      },
      editedProfileData: {},
      doctorData: {
        title: 'Uzman',
        branch: 'Beyin Cerrahı',
        clinicName: 'Beyin ve sinir cerrahisi',
        diplomaNo: '938458',
      },
      editedDoctorData: {},
      academicData: [
        {
          uuid: null,
          schoolName: 'A okulu',
          profession: 'Programmer',
          startYear: '02-04-2012',
          graduateYear: '06-12-2014',
        },
        {
          uuid: null,
          schoolName: 'B okulu',
          profession: 'Programmer',
          startYear: '02-04-2012',
          graduateYear: '06-12-2014',
        },
        {
          uuid: null,
          schoolName: 'C okulu',
          profession: 'Programmer',
          startYear: '02-04-2012',
          graduateYear: '06-12-2014',
        },
      ],
      editedAcademicData: [],
      addedAcademicData: [],
      certificateData: [
        {
          name: 'İngilizce Z1',
          certificateNo: 123456,
          takenFrom: 'ankara sincan merkez matbaacılar',
          takenDate: '02-04-2012',
        },
        {
          name: 'İngilizce Z5',
          certificateNo: 123456,
          takenFrom: 'ankara sincan merkez matbaacılar',
          takenDate: '02-04-2012',
        },
        {
          name: 'İngilizce Z18778778878777889787989787987998787998787987987987978987',
          certificateNo: 123456,
          takenFrom: 'ankara sincan merkez matbaacılar',
          takenDate: '02-04-2012',
        },
      ],
      editedCertificateData: [],
      addedCertificateData: [],
      // experience+articles normal data/ edited data / added data eklenecek
      openedModals: {
        updateDoctorProfile: false,
        updateDoctorInfo: false,
        updateAcademicInfo: false,
        updateCertificateInfo: false,
      },
      validationChecked: false,
    }
  },
  methods: {
    scrollToSpecifiedElement(name) {
      var elmntToView = document.getElementById(name)
      elmntToView.scrollIntoView()
    },
    checkValidation() {
      // Response
      this.validationChecked = true
    },
    closeModal(index, resetData) {
      this.openedModals[index] = false
      this.validationChecked = false
      if (resetData) {
        switch (index) {
          case 0:
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.profileData),
              )
              this.editedProfileData = cachedProfileData
            }
            break
          case 1:
            {
              let cachedDoctorData = JSON.parse(JSON.stringify(this.doctorData))
              this.editedDoctorData = cachedDoctorData
            }
            break

          case 2:
            {
              let cachedAcademicData = JSON.parse(
                JSON.stringify(this.academicData),
              )
              let cachedAddAcademicData = {}
              this.editedAcademicData = cachedAcademicData
              this.addedAcademicData = cachedAddAcademicData
            }
            break

          case 3:
            {
              let cachedCertificateData = JSON.parse(
                JSON.stringify(this.certificateData),
              )
              let cachedAddCertificateData = {}
              this.editedCertificateData = cachedCertificateData
              this.addedCertificateData = cachedAddCertificateData
            }
            break
        }
      }
    },
    deleteAcademicData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    deleteCertificateData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    addAcademicData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    addCertificateData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
  },
  created() {
    let cachedProfileData = JSON.parse(JSON.stringify(this.profileData))
    this.editedProfileData = cachedProfileData

    let cachedDoctorData = JSON.parse(JSON.stringify(this.doctorData))
    this.editedDoctorData = cachedDoctorData

    let cachedAcademicData = JSON.parse(JSON.stringify(this.academicData))
    this.editedAcademicData = cachedAcademicData

    let cachedCertificateData = JSON.parse(JSON.stringify(this.certificateData))
    this.editedCertificateData = cachedCertificateData
  },
}
</script>

<style>
.rounder {
  border-radius: 50%;
}
.d-list-item {
  display: list-item;
}
</style>
