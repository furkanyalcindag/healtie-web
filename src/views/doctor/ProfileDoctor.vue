<template>
  <CRow>
    <!-- Doctor profile -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.updateDoctorProfile"
      @close="closeModal('updateDoctorProfile')"
    >
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
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorProfile', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Doctor info -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.updateDoctorInfo"
      @close="closeModal('updateDoctorInfo')"
    >
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
            <CFormLabel for="update-doctor-clinicName">Klinik</CFormLabel>
            <CFormInput
              id="update-doctor-clinicName"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedDoctorData.clinicName"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-doctor-diplomaNo">İsim</CFormLabel>
            <CFormInput
              id="update-doctor-diplomaNo"
              type="number"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedDoctorData.diplomaNo"
            />
          </CCol>
          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorInfo', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Academic info -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.updateAcademicInfo"
      @close="closeModal('updateAcademicInfo')"
    >
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
                    id="update-doctor-academic-schoolName"
                    required
                    feedbackInvalid="Lütfen bir okul ismi giriniz"
                    v-model="addedAcademicData.schoolName"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-academic-profession"
                    required
                    feedbackInvalid="Lütfen bir uzmanlık alanı giriniz"
                    v-model="addedAcademicData.profession"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen bir başlangıç tarihi giriniz"
                    v-model="addedAcademicData.startYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
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
                    feedbackInvalid="Lütfen bir okul ismi giriniz"
                    v-model="school.schoolName"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir uzmanlık alanı giriniz"
                    v-model="school.profession"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    type="date"
                    required
                    feedbackInvalid="Lütfen bir başlangıç tarihi giriniz"
                    v-model="school.startYear"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen bir tarih giriniz"
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
            <CButton
              color="secondary"
              @click="closeModal('updateAcademicInfo', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal
      backdrop="static"
      size="lg"
      ref="deleteAcademicDataModal"
      :visible="openedModals.deleteAcademicData"
      @close="closeModal('deleteAcademicData')"
    >
      <CModalHeader>
        <CModalTitle>Makale <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Makale bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteAcademicData')"
            >Kapat</CButton
          >
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Certificate info -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.updateCertificateInfo"
      @close="closeModal('updateCertificateInfo')"
    >
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
                    type="date"
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
                    type="date"
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
            <CButton
              color="secondary"
              @click="closeModal('updateCertificateInfo', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.deleteCertificate"
      @close="closeModal('deleteCertificate')"
    >
      <CModalHeader>
        <CModalTitle
          >Sertifika <span class="text-danger">Sil</span></CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Sertifika bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteCertificate')"
            >Kapat</CButton
          >
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Experience info -->
    <CModal
      backdrop="static"
      size="xl"
      :visible="openedModals.updateExperienceInfo"
      @close="closeModal('updateExperienceInfo')"
    >
      <CModalHeader>
        <CModalTitle>Tecrübe Bilgilerimi Düzenle</CModalTitle>
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
                <CTableHeaderCell scope="col">Ünvan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Çalıştığı yer</CTableHeaderCell>
                <CTableHeaderCell scope="col">Açıklama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Başladığı tarih</CTableHeaderCell>
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
                    feedbackInvalid="Lütfen bir ünvan giriniz(Ex. Programmer)"
                    v-model="addedExperienceData.title"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir yer giriniz(Ex. Comitfy)"
                    v-model="addedExperienceData.workedPlace"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <!-- <div>
                    <div class="d-inline-block text-truncate">
                      <CTooltip
                        :content="addedExperienceData.description"
                        placement="top"
                      >
                        <template #toggler="{ on }">
                          <CFormInput
                            id="update-doctor-firstname"
                            required
                            v-on="on"
                            feedbackInvalid="Lütfen bir açıklama giriniz"
                            v-model="addedExperienceData.description"
                          />
                        </template>
                      </CTooltip>
                    </div>
                  </div> -->
                  <CFormTextarea
                    id="update-doctor-firstname"
                    style="max-width: 400px"
                    rows="0"
                    required
                    feedbackInvalid="Lütfen bir açıklama giriniz"
                    v-model="addedExperienceData.description"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen başlangıç tarihini giriniz"
                    v-model="addedExperienceData.startDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="addedExperienceData.endDate"
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
                    @click="addExperienceData(experience)"
                  >
                    <CIcon icon="cil-plus" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow
                v-for="(experience, index) in editedExperienceData"
                :key="index"
              >
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir ünvan giriniz(Ex. Programmer)"
                    v-model="experience.title"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir yer giriniz(Ex. Comitfy)"
                    v-model="experience.workedPlace"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <!-- <div>
                    <div class="d-inline-block text-truncate">
                      <CTooltip
                        :content="experience.description"
                        placement="top"
                      >
                        <template #toggler="{ on }">
                          <CFormInput
                            id="update-doctor-firstname"
                            required
                            v-on="on"
                            feedbackInvalid="Lütfen bir açıklama giriniz"
                            v-model="experience.description"
                          />
                        </template>
                      </CTooltip>
                    </div>
                  </div> -->
                  <CFormTextarea
                    id="update-doctor-firstname"
                    style="max-width: 400px"
                    rows="0"
                    required
                    feedbackInvalid="Lütfen bir açıklama giriniz"
                    v-model="experience.description"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen başlangıç tarihini giriniz"
                    v-model="experience.startDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    type="date"
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="experience.endDate"
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
                    @click="deleteExperienceData(experience)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateExperienceInfo', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.deleteExperience"
      @close="closeModal('deleteExperience')"
    >
      <CModalHeader>
        <CModalTitle
          >Sertifika <span class="text-danger">Sil</span></CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Sertifika bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteExperience')"
            >Kapat</CButton
          >
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Article info -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.updateArticleInfo"
      @close="closeModal('updateArticleInfo')"
    >
      <CModalHeader>
        <CModalTitle>Makale Bilgilerimi Düzenle</CModalTitle>
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
                <CTableHeaderCell scope="col">Ünvan</CTableHeaderCell>
                <CTableHeaderCell scope="col">Çalıştığı yer</CTableHeaderCell>
                <CTableHeaderCell scope="col">Açıklama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Başladığı tarih</CTableHeaderCell>
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
                    feedbackInvalid="Lütfen bir ünvan giriniz(Ex. Programmer)"
                    v-model="addedExperienceData.title"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir yer giriniz(Ex. Comitfy)"
                    v-model="addedExperienceData.workedPlace"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <div>
                    <div class="d-inline-block text-truncate">
                      <CTooltip
                        :content="addedExperienceData.description"
                        placement="top"
                      >
                        <template #toggler="{ on }">
                          <CFormInput
                            id="update-doctor-firstname"
                            required
                            v-on="on"
                            feedbackInvalid="Lütfen bir açıklama giriniz"
                            v-model="addedExperienceData.description"
                          />
                        </template>
                      </CTooltip>
                    </div>
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen başlangıç tarihini giriniz"
                    v-model="addedExperienceData.startDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="addedExperienceData.endDate"
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
                v-for="(experience, index) in editedExperienceData"
                :key="index"
              >
                <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir ünvan giriniz(Ex. Programmer)"
                    v-model="experience.title"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir yer giriniz(Ex. Comitfy)"
                    v-model="experience.workedPlace"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <div>
                    <div class="d-inline-block text-truncate">
                      <CTooltip
                        :content="experience.description"
                        placement="top"
                      >
                        <template #toggler="{ on }">
                          <CFormInput
                            id="update-doctor-firstname"
                            required
                            v-on="on"
                            feedbackInvalid="Lütfen bir açıklama giriniz"
                            v-model="experience.description"
                          />
                        </template>
                      </CTooltip>
                    </div>
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen başlangıç tarihini giriniz"
                    v-model="experience.startDate"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    id="update-doctor-firstname"
                    required
                    feedbackInvalid="Lütfen bir tarih giriniz"
                    v-model="experience.endDate"
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
                    @click="addArticleData(togo)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateArticleInfo', true)"
              >İptal</CButton
            >
            <CButton color="success" type="submit"
              >Değişiklikleri Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.deleteArticle"
      @close="closeModal('deleteArticle')"
    >
      <CModalHeader>
        <CModalTitle>Makale <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Makale bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteArticle')"
            >Kapat</CButton
          >
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Show comment -->
    <CModal
      backdrop="static"
      size="xl"
      style="width: 100% !important"
      :visible="openedModals.showComment"
      @close="closeModal('showComment')"
    >
      <CModalHeader>
        <CModalTitle>Makalenin Yorumları</CModalTitle>
      </CModalHeader>

      <CModalBody>
        <Comments
          :comments="commentData.comments"
          :parentCommentsPageOptions="commentData.pageOptions"
          :isLoading="commentData.isLoading"
          @load-more-comments-on-parent="loadChildComments"
          @send-reply-data="sendComment"
        >
        </Comments>
        <!-- <div class="p-4 md:w-2/3 lg:w-[55%] xl:1/3 mx-auto">
            <div class="container bootstrap snippets bootdey">
              <div class="row">
                <div class="col-md-12">
                  <div class="blog-comment">
                    <hr />
                    <ul class="comments">
                      <li class="clearfix">
                        <img
                          src="https://bootdey.com/img/Content/user_1.jpg"
                          class="avatar"
                          alt=""
                        />
                        <div class="post-comments">
                          <p class="meta">
                            Dec 18, 2014 <a href="#">JohnDoe</a> says :
                            <i class="pull-right"
                              ><a><small>Cevapla</small></a></i
                            >
                            <CButton
                              color="info"
                              class="ms-2 text-white align-items-center"
                              shape="rounded-pill"
                              size="sm"
                              v-c-tooltip="{
                                content: 'Cevapla',
                                placement: 'top',
                              }"
                              @click="() => (openedModals.addComment = true)"
                            >
                              <CIcon icon="cil-comment-bubble" />
                            </CButton>
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam a sapien odio, sit amet
                          </p>
                        </div>
                      </li>
                      <li class="clearfix">
                        <img
                          src="https://bootdey.com/img/Content/user_2.jpg"
                          class="avatar"
                          alt=""
                        />
                        <div class="post-comments">
                          <p class="meta">
                            Dec 19, 2014 <a href="#">JohnDoe</a> says :
                            <i class="pull-right"
                              ><a><small>Cevapla</small></a></i
                            >
                            <CButton
                              color="info"
                              class="ms-2 text-white align-items-center"
                              shape="rounded-pill"
                              size="sm"
                              v-c-tooltip="{
                                content: 'Cevapla',
                                placement: 'top',
                              }"
                              @click="() => (openedModals.addComment = true)"
                            >
                              <CIcon icon="cil-comment-bubble" />
                            </CButton>
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam a sapien odio, sit amet
                          </p>
                        </div>

                        <ul class="comments">
                          <li class="clearfix">
                            <img
                              src="https://bootdey.com/img/Content/user_3.jpg"
                              class="avatar"
                              alt=""
                            />
                            <div class="post-comments">
                              <p class="meta">
                                Dec 20, 2014 <a href="#">JohnDoe</a> says :
                                <i class="pull-right"
                                  ><a><small>Cevapla</small></a></i
                                >
                                <CButton
                                  color="info"
                                  class="ms-2 text-white align-items-center"
                                  shape="rounded-pill"
                                  size="sm"
                                  v-c-tooltip="{
                                    content: 'Cevapla',
                                    placement: 'top',
                                  }"
                                  @click="
                                    () => (openedModals.addComment = true)
                                  "
                                >
                                  <CIcon icon="cil-comment-bubble" />
                                </CButton>
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam a sapien odio, sit amet
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="clearfix">
                        <img
                          src="https://bootdey.com/img/Content/user_1.jpg"
                          class="avatar"
                          alt=""
                        />
                        <div class="post-comments">
                          <p class="meta">
                            Dec 18, 2014 <a href="#">JohnDoe</a> says :
                            <i class="pull-right"
                              ><a><small>Cevapla</small></a></i
                            >
                            <CButton
                              color="info"
                              class="ms-2 text-white align-items-center"
                              shape="rounded-pill"
                              size="sm"
                              v-c-tooltip="{
                                content: 'Cevapla',
                                placement: 'top',
                              }"
                              @click="() => (openedModals.addComment = true)"
                            >
                              <CIcon icon="cil-comment-bubble" />
                            </CButton>
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam a sapien odio, sit amet
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
      </CModalBody>

      <CModalFooter class="pe-0">
        <CButton color="secondary" @click="closeModal('showComment', true)"
          >Kapat</CButton
        >
      </CModalFooter>
    </CModal>
    <!-- Add comment -->
    <CModal
      size="lg"
      :visible="openedModals.addComment"
      @close="closeModal('addComment')"
    >
      <CModalHeader>
        <CModalTitle>Yorum Yap</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="checkValidation()"
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol xs="12">
            <CFormLabel for="add-comment">Yorum İçeriği</CFormLabel>
            <CFormTextarea
              id="add-comment"
              rows="3"
              required
              feedbackInvalid="Lütfen bir yorum giriniz"
            ></CFormTextarea>
          </CCol>
          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('addComment')"
              >Kapat</CButton
            >
            <CButton color="success" type="submit">Kaydet</CButton>
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
                          openedModals.updateDoctorProfile = true
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
                          openedModals.updateDoctorInfo = true
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
                          openedModals.updateDoctorProfile = true
                        }
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                  </CCallout>
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
                              openedModals.updateAcademicInfo = true
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
                              openedModals.updateCertificateInfo = true
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
                              openedModals.updateExperienceInfo = true
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
                        <CTableRow
                          v-for="(experience, index) in experienceData"
                          :key="index"
                        >
                          <CTableHeaderCell scope="row">{{
                            index + 1
                          }}</CTableHeaderCell>
                          <CTableDataCell>{{
                            experience.title
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            experience.workedPlace
                          }}</CTableDataCell>
                          <CTableDataCell>
                            <CTooltip
                              :content="experience.description"
                              placement="top"
                            >
                              <template #toggler="{ on }">
                                <div
                                  v-on="on"
                                  style="max-width: 150px"
                                  class="d-inline-block text-truncate"
                                >
                                  {{ experience.description }}
                                </div>
                              </template>
                            </CTooltip>
                          </CTableDataCell>
                          <CTableDataCell>{{
                            experience.startDate
                          }}</CTableDataCell>
                          <CTableDataCell>{{
                            experience.endDate
                          }}</CTableDataCell>
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
                          color="success"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-1"
                          shape="rounded-pill"
                          size="sm"
                          v-c-tooltip="{
                            content: 'Ekle',
                            placement: 'top',
                          }"
                          @click="() => {}"
                        >
                          <CIcon icon="cil-plus" />
                        </CButton>
                        <h5>Makaleleri</h5>
                      </CCol>
                    </CCardHeader>

                    <CCardBody class="bg-white p-0">
                      <easy-data-table
                        v-if="items != null"
                        show-index
                        style="
                          --easy-table-body-row-font-size: 16px;
                          --easy-table-header-font-size: 16px;
                        "
                        :headers="headers"
                        v-model:items="items"
                        :theme-color="themeColor"
                        buttons-pagination
                        :rows-per-page="rowsPerPage"
                      >
                        <template #item-title="{ data }">
                          <CTooltip :content="data.title" placement="top">
                            <template #toggler="{ on }">
                              <div
                                v-on="on"
                                style="max-width: 200px"
                                class="d-inline-block text-truncate"
                              >
                                {{ data.title }}
                              </div>
                            </template>
                          </CTooltip>
                        </template>
                        <template #item-publishedDate="{ data }">
                          {{ data.publishedDate }}
                        </template>
                        <template #item-statictics="{ data }">
                          <div class="position-relative d-inline-block">
                            <CTooltip
                              :content="String(data.likeCount)"
                              placement="top"
                            >
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
                            <CTooltip
                              :content="String(data.saveCount)"
                              placement="top"
                            >
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
                            <CTooltip
                              :content="String(data.commentCount)"
                              placement="top"
                            >
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
                        <template #item-operations="{ data }">
                          <CButton
                            color="warning"
                            class="ms-2 text-white align-items-center"
                            shape="rounded-pill"
                            size="sm"
                            v-c-tooltip="{
                              content: 'Düzenle',
                              placement: 'top',
                            }"
                            @click="() => {}"
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
                            @click="deleteArticleData(data)"
                          >
                            <CIcon icon="cil-trash" />
                          </CButton>
                          <CButton
                            color="info"
                            class="ms-2 text-white align-items-center"
                            shape="rounded-pill"
                            size="sm"
                            v-c-tooltip="{
                              content: 'Yorumlar',
                              placement: 'top',
                            }"
                            @click="showModal('showComment', data)"
                          >
                            <CIcon icon="cil-comment-bubble" />
                          </CButton>
                        </template>
                      </easy-data-table>
                    </CCardBody>
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
import Comments from '@/components/Comment.vue'
import articleCommentDTO from '@/models/articleCommentDTO'
import Toast from '@/models/create_TOAST_dto'
import { mapActions } from 'vuex'
export default {
  name: 'Colors',
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
    Comments,
  },
  data() {
    return {
      avatar: avatar,
      items: [
        {
          name: 'AAAAAAAAA',
        },
      ],
      profileData: {
        uuid: null,
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
        uuid: null,
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
      experienceData: [
        {
          uuid: null,
          title: 'A okulu',
          workedPlace: 'Programmer',
          description:
            'MERHABALAR BEN ÇEKİRGE. BUGÜN SİZLERLE BERABER NASIL TAVUK KIZARTILIR TARİFİNİ VERECEĞİM. İLK BAŞTA TAVUĞU ALIP KIZARTIN AFİYET OLSUN!',
          startDate: '06-12-2014',
          endDate: '06-12-2017',
        },
        {
          uuid: null,
          title: 'A okulu',
          workedPlace: 'Programmer',
          description:
            'MERHABALAR BEN ÇEKİRGE. BUGÜN SİZLERLE BERABER NASIL TAVUK KIZARTILIR TARİFİNİ VERECEĞİM. İLK BAŞTA TAVUĞU ALIP KIZARTIN AFİYET OLSUN!',
          startDate: '06-12-2014',
          endDate: '06-12-2017',
        },
        {
          uuid: null,
          title: 'A okulu',
          workedPlace: 'Programmer',
          description:
            'MERHABALAR BEN ÇEKİRGE. BUGÜN SİZLERLE BERABER NASIL TAVUK KIZARTILIR TARİFİNİ VERECEĞİM. İLK BAŞTA TAVUĞU ALIP KIZARTIN AFİYET OLSUN!',
          startDate: '06-12-2014',
          endDate: '06-12-2017',
        },
      ],
      editedExperienceData: [],
      addedExperienceData: [],
      articleData: [
        {
          totalPage: 0,
          data: {
            uuid: '534dd3f0-5db8-4892-b42a-0e7f341f6dc5',
            title: 'ABCdiler neden yumak şeyleri sever?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: 567578,
            saveCount: 12500,
            commentCount: 1250,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: 567578,
            saveCount: 12500,
            commentCount: 1250,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: 567578,
            saveCount: 12500,
            commentCount: 1250,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: 567578,
            saveCount: 12500,
            commentCount: 1250,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
        {
          totalPage: 0,
          data: {
            title: 'kediler neden mama yerine noodleyi tercih eder?',
            author: 'Hasan bey',
            publishedDate: 'M.Ö 124',
            likeCount: -1,
            saveCount: -1,
            commentCount: -1,
            tags: [
              {
                name: 'kedi',
              },
              {
                name: 'mama',
              },
              {
                name: 'hayvanlar',
              },
            ],
            categories: [
              {
                name: 'Veteriner',
              },
              {
                name: 'Hayvanlar',
              },
              {
                name: 'Kediler',
              },
            ],
          },
        },
      ],
      rowsPerPage: 10,
      themeColor: '#321fdb',
      headers: [
        { text: 'Başlık', value: 'title', sortable: true },
        { text: 'Yayınlanma Tarihi', value: 'publishedDate', sortable: true },
        { text: 'İstatistikler', value: 'statictics', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      // experience+articles normal data/ edited data / added data eklenecek
      openedModals: {
        updateDoctorProfile: false,
        updateDoctorInfo: false,
        updateAcademicInfo: false,
        updateCertificateInfo: false,
        updateExperienceInfo: false,
        updateArticleInfo: false,
        deleteAcademicData: false,
        deleteCertificate: false,
        deleteExperience: false,
        deleteArticle: false,
        showComment: false,
        addComment: false,
      },
      validationChecked: false,

      commentData: {
        data: articleCommentDTO.createEmpty(),
        comments: [],
        pageOptions: {
          number: 0,
          size: 10,
          totalElements: 10,
        },
        isLoading: true,
      },
      selectedComment: null,
      selectedArticle: null,
    }
  },
  watch: {
    'commentData.pageOptions.size'(newval) {
      console.log('Page size changed. Loading more...')
      console.log(newval)
      this.getParentCommentsFromArticle(this.selectedArticle)
    },
  },
  methods: {
    ...mapActions({
      getParentCommentsFromArticleAPI: 'comment/getParentCommentsFromArticle',
      getRepliesFromCommentAPI: 'comment/getRepliesFromComment',
      addReplyAPI: 'comment/addReply',
    }),
    scrollToSpecifiedElement(name) {
      var elmntToView = document.getElementById(name)
      elmntToView.scrollIntoView()
    },
    checkValidation() {
      // Response
      this.validationChecked = true
    },
    showModal(modalname, data) {
      switch (modalname) {
        case 'showComment':
          {
            this.getParentCommentsFromArticle(data)
            this.selectedArticle = data
          }
          break
      }
      this.openedModals[modalname] = true
    },
    async getParentCommentsFromArticle(data) {
      this.commentData.isLoading = true
      const response = await this.getParentCommentsFromArticleAPI({
        articleUUID: data.uuid,
        pageOptions: JSON.parse(JSON.stringify(this.commentData.pageOptions)),
      })
      console.log(data)
      // let notReplacedComment = {}
      this.commentData.pageOptions.totalElements = response
        ? response.totalElements
        : 0
      // Find the comments that already in comment data
      this.commentData.comments = await (response.data
        ? response.data.map((loopingComment) => {
            let isCommentAlreadyFoundInComments =
              this.commentData.comments.find(
                (loopingComment2) =>
                  loopingComment.uuid == loopingComment2.uuid,
              )
            if (isCommentAlreadyFoundInComments) {
              // this.commentData.comments.some((loopingComment3) => {
              //   if (loopingComment.uuid == loopingComment3.uuid) {
              //     notReplacedComment = loopingComment3
              //     return true
              //   }
              // })
              // console.log(notReplacedComment)
              // return notReplacedComment
              return isCommentAlreadyFoundInComments
            } else {
              return loopingComment
            }
          })
        : [])
      // this.commentData.comments = response ? response.data : []
      this.commentData.isLoading = false
      console.log(this.commentData.comments)
    },
    async getChildCommentsFromParentComment(commentUUIDandPageOptions) {
      return await this.getRepliesFromCommentAPI(commentUUIDandPageOptions)
    },
    async loadChildComments(commentUUIDandPageOptions) {
      /* eslint-disable */
      const replies = await this.getChildCommentsFromParentComment(
        commentUUIDandPageOptions,
      )
      console.log(commentUUIDandPageOptions)
      if (replies) {
        console.log(replies)
        // update comment replies
        // replies.data = replies.data.map((reply) => {
        //   reply.replyCount = 1
        //   return reply
        // })
        // to load replies for child comments and send it to parent comment (.replies)
        if (commentUUIDandPageOptions.commentData.mainParent) {
          let mainParentUUID = commentUUIDandPageOptions.commentData.mainParent
          let repliedCommentUUID =
            commentUUIDandPageOptions.commentData.repliedParent
          this.commentData.comments = await this.commentData.comments.map(
            (comment) => {
              if (comment.uuid == mainParentUUID) {
                let currentAddingCommentCount = -1
                if (comment.replies) {
                  comment.replies = comment.replies.map(
                    (repliedComment, replyCommentIndex) => {
                      if (repliedComment.uuid == repliedCommentUUID) {
                        currentAddingCommentCount = replyCommentIndex
                        repliedComment = commentUUIDandPageOptions.commentData
                        return repliedComment
                      }
                      return repliedComment
                    },
                  )
                  // add the comments bottom of the replied comment
                  if (currentAddingCommentCount >= 0) {
                    replies.data.forEach((replyComment) => {
                      currentAddingCommentCount++
                      comment.replies.splice(
                        currentAddingCommentCount,
                        0,
                        replyComment,
                      )
                    })
                  }
                }
              }
              return comment
            },
          )
        }
        // to load replies for parent comment
        else {
          this.commentData.comments = await this.commentData.comments.map(
            (comment) => {
              if (comment.uuid == commentUUIDandPageOptions.commentData.uuid) {
                comment = commentUUIDandPageOptions.commentData
                comment.replies = replies.data
                return comment
              }
              return comment
            },
          )
        }
      }
    },
    async sendComment(parentCommentAndReplyContent) {
      parentCommentAndReplyContent.articleUUID = this.selectedArticle.uuid
      console.log(parentCommentAndReplyContent)
      const response = await this.addReplyAPI(parentCommentAndReplyContent)
      if (response == true) {
        new Toast(
          'Comment added',
          'success',
          true,
          'text-white align-items-center',
        )
        let mainParentUUID = parentCommentAndReplyContent.selectedComment
            ? parentCommentAndReplyContent.selectedComment.uuid
            : null
        let repliedCommentUUID =
          parentCommentAndReplyContent.selectedChildComment
            ? parentCommentAndReplyContent.selectedChildComment.uuid
            : null
        // Get comments if its already in comment data. If not then add new one
        // if replied in a child comment
        if (repliedCommentUUID) {
          this.commentData.comments = await this.commentData.comments.map(
            (comment) => {
              if (comment.uuid == mainParentUUID) {
                let currentAddingCommentCount = -1
                if (comment.replies) {
                  comment.replies = comment.replies.map(
                    (repliedComment, replyCommentIndex) => {
                      if (repliedComment.uuid == repliedCommentUUID) {
                        currentAddingCommentCount = replyCommentIndex
                        //repliedComment.replyCount++
                        if(!repliedComment.loadedCommentCount){
                          repliedComment.loadedCommentCount = 1
                        }
                        repliedComment.replyCount++
                        repliedComment.mainParent = comment.uuid
                        repliedComment.repliedParent = repliedComment.uuid
                        // Check the reply count again to hide the button suddenly after the reply count exceeds
                        // IDK IF ITS NEEDED! IMPORTANT NOTE
                        if (
                          repliedComment.loadedCommentCount >=
                          repliedComment.replyCount
                        ) {
                          repliedComment.isReplyCountExceeded = true
                        }
                        this.loadChildComments({
                          pageNumber: 0,
                          pageSize: repliedComment.loadedCommentCount,
                          commentData: JSON.parse(
                            JSON.stringify(repliedComment),
                          ),
                        })
                        return repliedComment
                      }
                      return repliedComment
                    },
                  )
                }
              }
              return comment
            },
          )
        }
        // if replied in a parent comment
        else if (mainParentUUID) {
          this.commentData.comments = await this.commentData.comments.map(
            (comment, parentCommentIndex) => {
              if (comment.uuid == mainParentUUID) {
                if(!comment.loadedCommentCount){
                  comment.loadedCommentCount = 1
                }
                comment.replyCount++
                // Check the reply count again to hide the button suddenly after the reply count exceeds
                // IDK IF ITS NEEDED! IMPORTANT NOTE
                if (
                  comment.loadedCommentCount >=
                  comment.replyCount
                ) {
                  comment.isReplyCountExceeded = true
                }
                this.loadChildComments({
                  pageNumber: 0,
                  pageSize: comment.loadedCommentCount,
                  commentData: JSON.parse(
                    JSON.stringify(comment),
                  ),
                })
                return comment
              }
              return comment
            },
          )
        }
        // if replied directly in article
        else{
          this.commentData.pageOptions.size++
        }
        this.validationChecked = false
      } else {
        new Toast('Error', 'danger', true, 'text-white align-items-center')
      }
      this.isAbleToPushButton = true
    },
    closeModal(index, resetData) {
      this.openedModals[index] = false
      this.validationChecked = false
      // true - false if he wants to reset data of current modal
      if (resetData) {
        switch (index) {
          case 'updateDoctorProfile':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.profileData),
              )
              this.editedProfileData = cachedProfileData
            }
            break
          case 'updateDoctorInfo':
            {
              let cachedDoctorData = JSON.parse(JSON.stringify(this.doctorData))
              this.editedDoctorData = cachedDoctorData
            }
            break

          case 'updateAcademicInfo':
            {
              let cachedAcademicData = JSON.parse(
                JSON.stringify(this.academicData),
              )
              let cachedAddAcademicData = {}
              this.editedAcademicData = cachedAcademicData
              this.addedAcademicData = cachedAddAcademicData
            }
            break

          case 'updateCertificateInfo':
            {
              let cachedCertificateData = JSON.parse(
                JSON.stringify(this.certificateData),
              )
              let cachedAddCertificateData = {}
              this.editedCertificateData = cachedCertificateData
              this.addedCertificateData = cachedAddCertificateData
            }
            break

          case 'updateExperienceInfo':
            {
              let cachedExperienceData = JSON.parse(
                JSON.stringify(this.experienceData),
              )
              let cachedAddExperienceData = {}
              this.editedExperienceData = cachedExperienceData
              this.addedExperienceData = cachedAddExperienceData
            }
            break
        }
      }
    },
    addAcademicData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    deleteAcademicData(data) {
      console.log(data)
      this.openedModals.deleteAcademicData = true
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    addCertificateData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    deleteCertificateData(data) {
      console.log(data)
      this.openedModals.deleteCertificate = true
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    addExperienceData(data) {
      console.log(data)
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    deleteExperienceData(data) {
      console.log(data)
      this.openedModals.deleteExperience = true
      // data silme işlemleri(store üzerinden yapılacak ise ona göre düzeltilebilir)
    },
    addArticleData(togo) {
      console.log(togo)
      // link togo article ekleme sayfasına dönüş yapılacak
    },
    deleteArticleData(data) {
      console.log(data)
      this.openedModals.deleteArticle = true
    },
    showCommentData(data) {
      console.log(data)
      this.openedModals.showComment = true
    },
    addCommentData(data) {
      console.log(data)
      this.openedModals.addComment = true
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

    let cachedExperienceData = JSON.parse(JSON.stringify(this.experienceData))
    this.editedExperienceData = cachedExperienceData

    this.items = this.articleData
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
.pagination {
  margin: 0;
}
body {
  background: #eee;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #ffffff;
}
a {
  color: #82b440;
  text-decoration: none;
}
.blog-comment::before,
.blog-comment::after,
.blog-comment-form::before,
.blog-comment-form::after {
  content: '';
  display: table;
  clear: both;
}

.blog-comment {
  padding-left: 15%;
  padding-right: 15%;
}

.blog-comment ul {
  list-style-type: none;
  padding: 0;
}

.blog-comment img {
  opacity: 1;
  filter: Alpha(opacity=100);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}

.blog-comment img.avatar {
  position: relative;
  float: left;
  margin-left: 0;
  margin-top: 0;
  width: 65px;
  height: 65px;
}

.blog-comment .post-comments {
  border: 1px solid #eee;
  margin-bottom: 20px;
  margin-left: 85px;
  margin-right: 0px;
  padding: 10px 20px;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  background: #fff;
  color: #6b6e80;
  position: relative;
}

.blog-comment .meta {
  font-size: 13px;
  color: #aaaaaa;
  padding-bottom: 8px;
  margin-bottom: 10px !important;
  border-bottom: 1px solid #eee;
}

.blog-comment ul.comments ul {
  list-style-type: none;
  padding: 0;
  margin-left: 85px;
}

.blog-comment-form {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 40px;
}

.blog-comment h3,
.blog-comment-form h3 {
  margin-bottom: 40px;
  font-size: 26px;
  line-height: 30px;
  font-weight: 800;
}
</style>
