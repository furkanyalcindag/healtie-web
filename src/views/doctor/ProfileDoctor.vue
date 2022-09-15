<template>
  <CRow>
    <!-- DOCTOR-->
    <!-- Update Doctor profilePicture Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorProfilePicture"
      @close="closeModal('updateDoctorProfilePicture')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Profil Fotoğrafını Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorProfilePicture',

                  editedItemForProfileData.photoLink,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-profile-picture">Profil Resmi</CFormLabel>
            <CFormInput
              id="update-profile-picture"
              required
              feedbackInvalid="Lütfen bir dosya giriniz"
              v-model="editedItemForProfileData.photoLink"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorProfilePicture')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor phone Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorPhone"
      @close="closeModal('updateDoctorPhone')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Telefon Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorPhone',

                  editedItemForProfileData.phone,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-phone">Telefon Numarası</CFormLabel>
            <CFormInput
              id="update-phone"
              required
              feedbackInvalid="Lütfen bir telefon numarası giriniz"
              v-model="editedItemForProfileData.phone"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateDoctorPhone')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor address Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorAddress"
      @close="closeModal('updateDoctorAddress')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Adres Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorAddress',

                  editedItemForProfileData.address,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-address">Adres</CFormLabel>
            <CFormInput
              id="update-address"
              required
              feedbackInvalid="Lütfen bir adres bilgisi giriniz"
              v-model="editedItemForProfileData.address"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorAddress')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor title Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorTitle"
      @close="closeModal('updateDoctorTitle')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Ünvan Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorTitle',

                  editedItemForInfoData.title,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-title">Ünvan</CFormLabel>
            <CFormInput
              id="update-title"
              required
              feedbackInvalid="Lütfen bir ünvan bilgisi giriniz"
              v-model="editedItemForInfoData.title"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateDoctorTitle')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor branch Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorBranch"
      @close="closeModal('updateDoctorBranch')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Branş Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorBranch',

                  editedItemForInfoData.branch,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-branch">Branş</CFormLabel>
            <CFormInput
              id="update-branch"
              required
              feedbackInvalid="Lütfen bir branş giriniz"
              v-model="editedItemForInfoData.branch"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateDoctorBranch')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor clinic Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorClinicName"
      @close="closeModal('updateDoctorClinicName')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Klinik Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorClinicName',

                  editedItemForInfoData.clinicName,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-clinic-name">Klinik</CFormLabel>
            <CFormInput
              id="update-clinic-name"
              required
              feedbackInvalid="Lütfen bir klinik adı giriniz"
              v-model="editedItemForInfoData.clinicName"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorClinicName')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor DiplomaNo Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorDiplomaNo"
      @close="closeModal('updateDoctorDiplomaNo')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Diploma Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorDiplomaNo',

                  editedItemForInfoData.diplomaNo,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-diploma-no">Diploma Numarası</CFormLabel>
            <CFormInput
              id="update-diploma-no"
              required
              feedbackInvalid="Lütfen bir klinik adı giriniz"
              v-model="editedItemForInfoData.diplomaNo"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updateDoctorDiplomaNo')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor About Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateDoctorAbout"
      @close="closeModal('updateDoctorAbout')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Hakkımda Bilgisini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateDoctorAbout',

                  editedItemForProfileData.about,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-about">Hakkımda</CFormLabel>
            <CFormInput
              id="update-about"
              required
              feedbackInvalid="Lütfen hakkınızda bir şeyler giriniz"
              v-model="editedItemForProfileData.about"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateDoctorAbout')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Update Doctor Name-Surname Modal -->
    <CModal
      size="lg"
      :visible="openedModals.updateUserName"
      @close="closeModal('updateUserName')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>İsim ve Soyisimi Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateUserName',

                  editedItemForProfileData.firstName,
                  editedItemForProfileData.lastName,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-user-first-name">İsim</CFormLabel>
            <CFormInput
              id="update-user-first-name"
              required
              feedbackInvalid="Lütfen bir isim giriniz"
              v-model="editedItemForProfileData.firstName"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-user-last-name">Soyisim</CFormLabel>
            <CFormInput
              id="update-user-last-name"
              required
              feedbackInvalid="Lütfen bir soyisim giriniz"
              v-model="editedItemForProfileData.lastName"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateUserName')"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Değişiklikleri Kaydet
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>

    <!-- ACADEMIC INFO-->
    <!-- Add Academic Info Modal -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.addAcademicInfoModal"
      @close="closeModal('addAcademicInfoModal')"
    >
      <CModalHeader>
        <CModalTitle>Akademik Bilgi Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'addAcademicInfoModal',
                  addedAcademicInfoItem.data,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-school-name"
              >Okul Adı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-school-name"
              required
              feedbackInvalid="Lütfen bir okul adı giriniz"
              v-model="addedAcademicInfoItem.data.schoolName"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-profession"
              >Uzmanlık Alanı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-profession"
              required
              feedbackInvalid="Lütfen bir uzmanlık alanı giriniz"
              v-model="addedAcademicInfoItem.data.profession"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-academicInfo-startYear"
              >Başlama Tarihi</CFormLabel
            >
            <CFormInput
              id="add-academicInfo-startYear"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="addedAcademicInfoItem.data.startYear"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-academicInfo-graduateYear"
              >Bitiş Tarihi</CFormLabel
            >
            <CFormInput
              id="add-academicInfo-graduateYear"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="addedAcademicInfoItem.data.graduateYear"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('addAcademicInfoModal', true)"
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
    <!-- Update Academic info -->
    <CModal
      size="lg"
      :visible="openedModals.updateAcademicInfo"
      @close="closeModal('updateAcademicInfo')"
    >
      <CModalHeader>
        <CModalTitle>Akademik Bilgileri Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            submitToAPI($event, 'updateAcademicInfo', editedItemForAcademicInfo)
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-school-name"
              >Okul Adı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-school-name"
              required
              feedbackInvalid="Lütfen bir okul adı giriniz"
              v-model="editedItemForAcademicInfo.schoolName"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-profession"
              >Uzmanlık Alanı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-profession"
              required
              feedbackInvalid="Lütfen bir uzmanlık alanı giriniz"
              v-model="editedItemForAcademicInfo.profession"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-academicInfo-startYear"
              >Başlama Tarihi</CFormLabel
            >
            <CFormInput
              id="update-academicInfo-startYear"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItemForAcademicInfo.startYear"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-academicInfo-graduateYear"
              >Bitiş Tarihi</CFormLabel
            >
            <CFormInput
              id="update-academicInfo-graduateYear"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItemForAcademicInfo.graduateYear"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateAcademicInfo')"
              >İptal</CButton
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
    <!-- Delete Academic info -->
    <CModal
      size="lg"
      :visible="openedModals.deleteAcademicInfo"
      @close="closeModal('deleteAcademicInfo')"
    >
      <CModalHeader>
        <CModalTitle
          >Akademik Bilgi <span class="text-danger">Sil</span></CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Akademi bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteAcademicInfo')"
            >Kapat</CButton
          >
          <CButton
            color="danger"
            @click="
              isAbleToPushButton
                ? deleteAcademicInfo(selectedAcademicInfo.uuid)
                : null
            "
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>

    <!-- CERTIFICATE-->
    <!-- Add Certificate Modal -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.addCertificateModal"
      @close="closeModal('addCertificateModal')"
    >
      <CModalHeader>
        <CModalTitle>Sertifika Bilgisi Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'addCertificateModal',
                  addedCertificateItem.data,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-name"
              >Sertifika Adı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-name"
              required
              feedbackInvalid="Lütfen bir sertifika adı giriniz"
              v-model="addedCertificateItem.data.name"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-certifica-no"
              >Sertifika Numarası<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-certifica-no"
              required
              feedbackInvalid="Lütfen bir sertifika numarası giriniz"
              v-model="addedCertificateItem.data.certificateNo"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-certificate-takenFrom"
              >Alındığı Yer<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-certificate-takenFrom"
              required
              feedbackInvalid="Lütfen kurum adı giriniz"
              v-model="addedCertificateItem.data.takenFrom"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-academicInfo-graduateYear"
              >Alındığı Tarih</CFormLabel
            >
            <CFormInput
              id="add-certificate-takenDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="addedCertificateItem.data.takenDate"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('addCertificateModal', true)"
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
    <!-- Update Certificate -->
    <CModal
      size="lg"
      :visible="openedModals.updateCertificate"
      @close="closeModal('updateCertificate')"
    >
      <CModalHeader>
        <CModalTitle>Sertifika Bilgilerini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            submitToAPI($event, 'updateCertificate', editedItemForCertificate)
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-name"
              >Sertifika Adı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-name"
              required
              feedbackInvalid="Lütfen bir sertifika adı giriniz"
              v-model="editedItemForCertificate.name"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-certifica-no"
              >Sertifika Numarası<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-certifica-no"
              required
              feedbackInvalid="Lütfen bir sertifika numarası giriniz"
              v-model="editedItemForCertificate.certificateNo"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-certificate-takenFrom"
              >Alındığı Yer<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-certificate-takenFrom"
              required
              feedbackInvalid="Lütfen kurum adı giriniz"
              v-model="editedItemForCertificate.takenFrom"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-academicInfo-graduateYear"
              >Alındığı Tarih</CFormLabel
            >
            <CFormInput
              id="update-certificate-takenDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItemForCertificate.takenDate"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateCertificate')"
              >İptal</CButton
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
    <!-- Delete Certificate -->
    <CModal
      size="lg"
      :visible="openedModals.deleteCertificate"
      @close="closeModal('deleteCertificate')"
    >
      <CModalHeader>
        <CModalTitle
          >Sertifika Bilgisi <span class="text-danger">Sil</span></CModalTitle
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
          <CButton
            color="danger"
            @click="
              isAbleToPushButton
                ? deleteCertificate(selectedCertificate.uuid)
                : null
            "
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>

    <!-- EXPERIENCE-->
    <!-- Add Experience Modal -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.addExperienceModal"
      @close="closeModal('addExperienceModal')"
    >
      <CModalHeader>
        <CModalTitle>Tecrübe Bilgisi Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'addExperienceModal',
                  addedExperienceItem.data,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-title"
              >Ünvan<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-title"
              required
              feedbackInvalid="Lütfen bir ünvan giriniz"
              v-model="addedExperienceItem.data.title"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-worked-place"
              >Kurum Adı<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-worked-place"
              required
              feedbackInvalid="Lütfen bir kurum adı giriniz"
              v-model="addedExperienceItem.data.workedPlace"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-experience-startDate"
              >Başlama Tarihi</CFormLabel
            >
            <CFormInput
              id="add-experience-startDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="addedExperienceItem.data.startDate"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-experience-endDate">Bitiş Tarihi</CFormLabel>
            <CFormInput
              id="add-experience-endDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="addedExperienceItem.data.endDate"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="add-worked-place"
              >Açıklama<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="add-worked-place"
              required
              feedbackInvalid="Lütfen bir açıklama  giriniz"
              v-model="addedExperienceItem.data.description"
              autocomplete="off"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('addExperienceModal', true)"
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
    <!-- Update Experience -->
    <CModal
      size="lg"
      :visible="openedModals.updateExperience"
      @close="closeModal('updateExperience')"
    >
      <CModalHeader>
        <CModalTitle>Tecrübe Bilgilerini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            submitToAPI($event, 'updateExperience', editedItemForExperience)
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="update-title"
              >Ünvan<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-title"
              required
              feedbackInvalid="Lütfen bir ünvan giriniz"
              v-model="editedItemForExperience.title"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-worked-place"
              >Kurum İsmi<span class="text-danger">*</span></CFormLabel
            >
            <CFormInput
              id="update-worked-place"
              required
              feedbackInvalid="Lütfen bir kurum ismi giriniz"
              v-model="editedItemForExperience.workedPlace"
              autocomplete="off"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-experience-startDate"
              >Başlama Tarihi</CFormLabel
            >
            <CFormInput
              id="update-experience-startDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItemForExperience.startDate"
            />
          </CCol>
          <CCol md="6">
            <CFormLabel for="update-experience-endDate"
              >Bitiş Tarihi</CFormLabel
            >
            <CFormInput
              id="update-experience-endDate"
              required
              type="date"
              feedbackInvalid="Lütfen bir tarih giriniz"
              v-model="editedItemForExperience.endDate"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateExperience')"
              >İptal</CButton
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
    <!-- Delete Experience-->
    <CModal
      size="lg"
      :visible="openedModals.deleteExperience"
      @close="closeModal('deleteExperience')"
    >
      <CModalHeader>
        <CModalTitle
          >Tecrübe Bilgisi <span class="text-danger">Sil</span></CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Tecrübe bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteExperience')"
            >Kapat</CButton
          >
          <CButton
            color="danger"
            @click="
              isAbleToPushButton
                ? deleteExperience(selectedExperience.uuid)
                : null
            "
            >SİL</CButton
          >
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
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.showComment"
      @close="closeModal('showComment')"
    >
      <CModalHeader>
        <CModalTitle>Makalenin Yorumları</CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="checkValidation()"
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <div class="p-4 md:w-2/3 lg:w-[55%] xl:1/3 mx-auto">
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
          </div>
        </CForm>
        <div class="d-grid gap-2 col-6 mx-auto">
          <CButton color="light">Daha Fazla</CButton>
        </div>
      </CModalBody>

      <CModalFooter class="pe-0">
        <CButton color="secondary" @click="closeModal('showComment', true)"
          >Kapat</CButton
        >
      </CModalFooter>
    </CModal>
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
                      <div class="position-relative">
                        <CAvatar
                          :src="avatar"
                          status="success"
                          style="transform: scale(4)"
                          class="position-relative"
                        >
                        </CAvatar>
                        <CButton
                          style="transform: translateX(545%) translateY(140%)"
                          color="warning"
                          class="ms-2 text-white align-items-end position-absolute end-0 top-0 m-1"
                          shape="rounded-pill"
                          size="sm"
                          v-c-tooltip="{
                            content: 'Düzenle',
                            placement: 'top',
                          }"
                          @click="
                            showModal(
                              'updateDoctorProfilePicture',
                              editedItemForProfileData,
                            )
                          "
                        >
                          <CIcon icon="cil-pencil" />
                        </CButton>
                      </div>
                    </div>
                  </CCardTitle>
                </CCardBody>

                <CListGroup
                  flush
                  @submit.prevent="
                    submitToAPI($event, 'getDoctorProfile', doctorProfileData)
                  "
                >
                  <CListGroupItem
                    ><span class="fw-bolder">İsim Soyisim: </span>
                    {{
                      ' ' +
                      doctorProfileData.firstName +
                      ' ' +
                      doctorProfileData.lastName
                    }}
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
                        showModal('updateUserName', editedItemForProfileData)
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Email: </span>
                    {{ ' ' + doctorProfileData.email }}
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Tel No: </span>
                    {{ ' ' + doctorProfileData.phone }}
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
                        showModal('updateDoctorPhone', editedItemForProfileData)
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
                  </CListGroupItem>
                  <CListGroupItem
                    ><span class="fw-bolder">Adres: </span>
                    {{ ' ' + doctorProfileData.address }}
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
                        showModal(
                          'updateDoctorAddress',
                          editedItemForProfileData,
                        )
                      "
                    >
                      <CIcon icon="cil-pencil" />
                    </CButton>
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
                    <h5>Doktor Bilgileri</h5>
                    <CListGroup
                      flush
                      style="min-height: 10.2rem"
                      @submit.prevent="
                        submitToAPI($event, 'getDoctorInfo', doctorInfoData)
                      "
                    >
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Title:</span></CCol
                          >
                          <CCol :sm="10"
                            >{{ doctorInfoData.title }}
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
                                showModal(
                                  'updateDoctorTitle',
                                  editedItemForInfoData,
                                )
                              "
                            >
                              <CIcon icon="cil-pencil" />
                            </CButton>
                          </CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Branch:</span></CCol
                          >
                          <CCol :sm="10"
                            >{{ doctorInfoData.branch }}
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
                                showModal(
                                  'updateDoctorBranch',
                                  editedItemForInfoData,
                                )
                              "
                            >
                              <CIcon icon="cil-pencil" /> </CButton
                          ></CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Klinik:</span></CCol
                          >
                          <CCol :sm="10"
                            >{{ doctorInfoData.clinicName }}
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
                                showModal(
                                  'updateDoctorClinicName',
                                  editedItemForInfoData,
                                )
                              "
                            >
                              <CIcon icon="cil-pencil" /> </CButton
                          ></CCol>
                        </CRow>
                      </CListGroupItem>
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="2"
                            ><span class="fw-bolder">Diploma NO:</span></CCol
                          >
                          <CCol :sm="10">
                            {{ doctorInfoData.diplomaNo }}
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
                                showModal(
                                  'updateDoctorDiplomaNo',
                                  editedItemForInfoData,
                                )
                              "
                            >
                              <CIcon icon="cil-pencil" /> </CButton
                          ></CCol>
                        </CRow>
                      </CListGroupItem>
                    </CListGroup>
                  </CCallout>
                  <CCallout
                    color="primary"
                    class="position-relative mt-0 me-0 ms-0 mb-3"
                  >
                    <h5>Hakkımda</h5>
                    <CListGroup
                      flush
                      style="min-height: 8rem"
                      @submit.prevent="
                        submitToAPI(
                          $event,
                          'getDoctorProfile',
                          doctorProfileData,
                        )
                      "
                    >
                      <CListGroupItem>
                        <CRow>
                          <CCol :sm="12">{{ doctorProfileData.about }} </CCol>
                        </CRow>
                      </CListGroupItem>
                    </CListGroup>
                    <CButton
                      color="warning"
                      class="m-3 text-white align-items-center position-absolute end-0 top-0 m-1"
                      shape="rounded-pill"
                      size="sm"
                      v-c-tooltip="{
                        content: 'Düzenle',
                        placement: 'top',
                      }"
                      @click="
                        showModal('updateDoctorAbout', editedItemForProfileData)
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
                    id="doctor-academic-info"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="success"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-2"
                          shape="rounded-pill"
                          v-c-tooltip="{
                            content: 'Ekle',
                            placement: 'top',
                          }"
                          @click="
                            showModal('addAcademicInfoModal', academicInfoData)
                          "
                        >
                          <CIcon icon="cil-plus" />
                        </CButton>

                        <h5>Akademik Bilgileri</h5>
                      </CCol>
                    </CCardHeader>

                    <CCardBody class="bg-white p-0">
                      <easy-data-table
                        v-if="itemsForAcademicInfo != null"
                        show-index
                        style="
                          --easy-table-body-row-font-size: 16px;
                          --easy-table-header-font-size: 16px;
                        "
                        :headers="headersForAcademicInfo"
                        v-model:itemsSelected="itemsSelected"
                        v-model:server-options="academicInfoTable.serverOptions"
                        :server-items-length="
                          academicInfoTable.serverItemsLength
                        "
                        :items="itemsForAcademicInfo"
                        :theme-color="themeColor"
                        buttons-pagination
                        :loading="academicInfoTable.loading"
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
                                @click="showModal('updateAcademicInfo', item)"
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
                                @click="showModal('deleteAcademicInfo', item)"
                              >
                                <CIcon icon="cil-trash" />
                              </CButton>
                            </CButtonGroup>
                          </div>
                        </template>
                      </easy-data-table>
                    </CCardBody>
                  </CCard>
                  <CCard
                    id="doctor-certificate"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="success"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-2"
                          shape="rounded-pill"
                          v-c-tooltip="{
                            content: 'Ekle',
                            placement: 'top',
                          }"
                          @click="
                            showModal('addCertificateModal', certificateData)
                          "
                        >
                          <CIcon icon="cil-plus" />
                        </CButton>

                        <h5>Sertifika Bilgileri</h5>
                      </CCol>
                    </CCardHeader>

                    <CCardBody class="bg-white p-0">
                      <easy-data-table
                        v-if="itemsForCertificate != null"
                        show-index
                        style="
                          --easy-table-body-row-font-size: 16px;
                          --easy-table-header-font-size: 16px;
                        "
                        :headers="headersForCertificate"
                        v-model:itemsSelected="itemsSelected"
                        v-model:server-options="certificateTable.serverOptions"
                        :server-items-length="
                          certificateTable.serverItemsLength
                        "
                        :items="itemsForCertificate"
                        :theme-color="themeColor"
                        buttons-pagination
                        :loading="certificateTable.loading"
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
                                @click="showModal('updateCertificate', item)"
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
                                @click="showModal('deleteCertificate', item)"
                              >
                                <CIcon icon="cil-trash" />
                              </CButton>
                            </CButtonGroup>
                          </div>
                        </template>
                      </easy-data-table>
                    </CCardBody>
                  </CCard>
                  <CCard
                    id="doctor-experience"
                    color="primary"
                    class="mt-0 me-0 ms-0 mb-3"
                  >
                    <CCardHeader>
                      <CCol lg="3" class="text-left mt-3 text-white">
                        <CButton
                          color="success"
                          class="ms-2 text-white align-items-center position-absolute end-0 top-0 m-2"
                          shape="rounded-pill"
                          v-c-tooltip="{
                            content: 'Ekle',
                            placement: 'top',
                          }"
                          @click="
                            showModal('addExperienceModal', experienceData)
                          "
                        >
                          <CIcon icon="cil-plus" />
                        </CButton>

                        <h5>Tecrübe Bilgileri</h5>
                      </CCol>
                    </CCardHeader>

                    <CCardBody class="bg-white p-0">
                      <easy-data-table
                        v-if="itemsForExperience != null"
                        show-index
                        style="
                          --easy-table-body-row-font-size: 16px;
                          --easy-table-header-font-size: 16px;
                        "
                        :headers="headersForExperience"
                        v-model:itemsSelected="itemsSelected"
                        v-model:server-options="experienceTable.serverOptions"
                        :server-items-length="experienceTable.serverItemsLength"
                        :items="itemsForExperience"
                        :theme-color="themeColor"
                        buttons-pagination
                        :loading="experienceTable.loading"
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
                                @click="showModal('updateExperience', item)"
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
                                @click="showModal('deleteExperience', item)"
                              >
                                <CIcon icon="cil-trash" />
                              </CButton>
                            </CButtonGroup>
                          </div>
                        </template>
                      </easy-data-table>
                    </CCardBody>
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
                            @click="showCommentData(data)"
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
import DoctorProfileDTO from '@/models/doctorProfileDTO'
import DoctorInfoDTO from '@/models/doctorInfoDTO'
import DoctorAcademicInfoDTO from '@/models/doctorAcademicInfoDTO'
import DoctorCertificateDTO from '@/models/doctorCertificateDTO'
import DoctorExperienceDTO from '@/models/doctorExperienceDTO'
import createDoctorProfileDTO from '@/models/doctorProfileDTO'
import createDoctorInfoDTO from '@/models/doctorInfoDTO'
import { mapActions } from 'vuex'
import Toast from '@/models/create_TOAST_dto'
export default {
  name: 'Colors',
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
  },
  data() {
    return {
      avatar: avatar,

      doctorProfileData: DoctorProfileDTO.createEmpty(),

      doctorInfoData: DoctorInfoDTO.createEmpty(),

      academicInfoData: DoctorAcademicInfoDTO.createEmpty(),

      certificateData: DoctorCertificateDTO.createEmpty(),

      experienceData: DoctorExperienceDTO.createEmpty(),

      addedAcademicInfoItem: {
        // Real data
        data: DoctorAcademicInfoDTO.createEmpty(),
      },
      addedCertificateItem: {
        // Real data
        data: DoctorCertificateDTO.createEmpty(),
      },
      addedExperienceItem: {
        // Real data
        data: DoctorExperienceDTO.createEmpty(),
      },

      articleData: [
        {
          totalPage: 0,
          data: {
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
      itemsSelected: [],
      headers: [
        { text: 'Başlık', value: 'title', sortable: true },
        { text: 'Yayınlanma Tarihi', value: 'publishedDate', sortable: true },
        { text: 'İstatistikler', value: 'statictics', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      //Items
      itemsForDoctorProfile: [],
      itemsForAcademicInfo: [],
      itemsForCertificate: [],
      itemsForExperience: [],
      //Headers
      headersForDoctorProfile: [
        { text: 'İsim', value: 'firstName', sortable: true },
        { text: 'Soyisim', value: 'lastName' },
        { text: 'Email', value: 'email' },
        { text: 'Telefon', value: 'telNo' },
        { text: 'Adres', value: 'address' },
      ],
      headersForAcademicInfo: [
        { text: 'Okul', value: 'schoolName', sortable: true },
        { text: 'Uzmanlık Alanı', value: 'profession', sortable: true },
        { text: 'Başlangıç Tarihi', value: 'startYear' },
        { text: 'Bitiş Tarihi', value: 'graduateYear' },
        { text: 'İşlemler', value: 'operations' },
      ],
      headersForCertificate: [
        { text: 'Sertifika İsmi', value: 'name', sortable: true },
        { text: 'Sertifika Numarası', value: 'certificateNo', sortable: true },
        { text: 'Alındığı Yer', value: 'takenFrom' },
        { text: 'Tarih', value: 'takenDate' },
        { text: 'İşlemler', value: 'operations' },
      ],
      headersForExperience: [
        { text: 'Ünvan', value: 'title', sortable: true },
        { text: 'Kurum İsmi', value: 'workedPlace', sortable: true },
        { text: 'Başlangıç Tarihi', value: 'startDate' },
        { text: 'Bitiş Tarihi', value: 'endDate' },
        { text: 'Açıklama', value: 'description' },
        { text: 'İşlemler', value: 'operations' },
      ],

      openedModals: {
        getDoctorProfile: false,
        getDoctorInfo: false,
        updateDoctorProfilePicture: false,
        updateDoctorPhone: false,
        updateDoctorAddress: false,
        updateDoctorTitle: false,
        updateDoctorBranch: false,
        updateDoctorClinicName: false,
        updateDoctorDiplomaNo: false,
        updateDoctorAbout: false,
        updateUserName: false,

        addAcademicInfoModal: false,
        updateAcademicInfo: false,
        deleteAcademicInfo: false,

        addCertificateModal: false,
        updateCertificate: false,
        deleteCertificate: false,

        addExperienceModal: false,
        updateExperience: false,
        deleteExperience: false,

        updateArticleInfo: false,
        deleteArticle: false,
        showComment: false,
        addComment: false,
      },
      //TABLES
      academicInfoTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },
      certificateTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },
      experienceTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },

      selectedAcademicInfo: {},
      selectedCertificate: {},
      selectedExperience: {},
      selectedDoctor: {},

      validationChecked: false,
      toasts: [],
      isAbleToPushButton: true,

      addedItem: {
        data: new createDoctorInfoDTO(null, null, null, null),
      },

      editedItem: {
        data: new createDoctorProfileDTO(null, null, null, null, null, null),
      },

      editedItemForProfileData: {
        data: DoctorProfileDTO.createEmpty(),
      },
      editedItemForInfoData: {
        data: DoctorInfoDTO.createEmpty(),
      },
      editedItemForAcademicInfo: {
        data: DoctorAcademicInfoDTO.createEmpty(),
      },
      editedItemForCertificate: {
        data: DoctorCertificateDTO.createEmpty(),
      },
      editedItemForExperience: {
        data: DoctorExperienceDTO.createEmpty(),
      },
    }
  },
  watch: {
    selectedDoctor(newvalue) {
      this.getDoctor(newvalue)
    },
    'academicInfoTable.serverOptions'(newvalue) {
      this.getAcademicInfoByDoctor(newvalue)
    },
    'certificateTable.serverOptions'(newvalue) {
      this.getCertificateByDoctor(newvalue)
    },
    'experienceTable.serverOptions'(newvalue) {
      this.getExperienceByDoctor(newvalue)
    },
  },
  async created() {
    await this.getDoctor()
    await this.getAcademicInfoByDoctor(this.academicInfoTable.serverOptions)
    await this.getCertificateByDoctor(this.certificateTable.serverOptions)
    await this.getExperienceByDoctor(this.experienceTable.serverOptions)
  },
  methods: {
    ...mapActions({
      //DOCTOR
      getDoctorAPI: 'doctor/getDoctor',
      updateDoctorProfilePictureAPI: 'doctor/updateDoctorProfilePicture',
      updateDoctorPhoneAPI: 'doctor/updateDoctorPhone',
      updateDoctorAddressAPI: 'doctor/updateDoctorAddress',
      updateDoctorTitleAPI: 'doctor/updateDoctorTitle',
      updateDoctorBranchAPI: 'doctor/updateDoctorBranch',
      updateDoctorClinicNameAPI: 'doctor/updateDoctorClinicName',
      updateDoctorDiplomaNoAPI: 'doctor/updateDoctorDiplomaNo',
      updateDoctorAboutAPI: 'doctor/updateDoctorAbout',
      updateUserNameAPI: 'user/updateUserName',
      //ACADEMIC INFO
      getAcademicInfoByDoctorAPI: 'academicInfo/getAcademicInfoByDoctor',
      addAcademicInfoAPI: 'academicInfo/addAcademicInfo',
      updateAcademicInfoAPI: 'academicInfo/updateAcademicInfo',
      deleteAcademicInfoAPI: 'academicInfo/deleteAcademicInfo',
      //CERTIFICATE
      getCertificateByDoctorAPI: 'certificate/getCertificateByDoctor',
      addCertificateAPI: 'certificate/addCertificate',
      updateCertificateAPI: 'certificate/updateCertificate',
      deleteCertificateAPI: 'certificate/deleteCertificate',
      //EXPERIENCE
      getExperienceByDoctorAPI: 'experience/getExperienceByDoctor',
      addExperienceAPI: 'experience/addExperience',
      updateExperienceAPI: 'experience/updateExperience',
      deleteExperienceAPI: 'experience/deleteExperience',
    }),
    submitToAPI(event, modalName, data) {
      this.isAbleToPushButton = false
      this.validationChecked = true
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        this.isAbleToPushButton = true
        return
      }
      switch (modalName) {
        case 'getDoctorProfile':
          {
            this.getDoctorById()
          }
          break
        case 'getDoctorInfo':
          {
            this.getDoctorById()
          }
          break
        case 'updateUserName':
          {
            this.updateUserName(data)
          }
          break
        case 'updateDoctorProfilePicture':
          {
            this.updateDoctorProfilePicture(data)
          }
          break
        case 'updateDoctorPhone':
          {
            this.updateDoctorPhone(data)
          }
          break
        case 'updateDoctorAddress':
          {
            this.updateDoctorAddress(data)
          }
          break
        case 'updateDoctorTitle':
          {
            this.updateDoctorTitle(data)
          }
          break
        case 'updateDoctorBranch':
          {
            this.updateDoctorBranch(data)
          }
          break
        case 'updateDoctorClinicName':
          {
            this.updateDoctorClinicName(data)
          }
          break
        case 'updateDoctorDiplomaNo':
          {
            this.updateDoctorDiplomaNo(data)
          }
          break
        case 'updateDoctorAbout':
          {
            this.updateDoctorAbout(data)
          }
          break
        case 'updateAcademicInfo':
          {
            this.updateAcademicInfo(data)
            console.log(data)
          }
          break
        case 'updateCertificate':
          {
            this.updateCertificate(data)
            console.log(data)
          }
          break
        case 'updateExperience':
          {
            this.updateExperience(data)
            console.log(data)
          }
          break

        case 'addAcademicInfoModal':
          {
            this.addAcademicInfo(JSON.parse(JSON.stringify(data)))
          }
          break
        case 'addCertificateModal':
          {
            this.addCertificate(JSON.parse(JSON.stringify(data)))
          }
          break
        case 'addExperienceModal':
          {
            this.addExperience(JSON.parse(JSON.stringify(data)))
          }
          break
      }
      this.isAbleToPushButton = true
    },
    showModal(modalname, data) {
      this.selectedDoctor = data ? JSON.parse(JSON.stringify(data)) : {}
      this.selectedAcademicInfo = data ? JSON.parse(JSON.stringify(data)) : {}
      this.selectedCertificate = data ? JSON.parse(JSON.stringify(data)) : {}
      this.selectedExperience = data ? JSON.parse(JSON.stringify(data)) : {}
      switch (modalname) {
        case 'getDoctorInfo':
          {
            let cachedItemData = JSON.parse(JSON.stringify(data))
            this.editedItem = cachedItemData
          }
          break
        case 'updateUserName':
          {
            let cachedDoctorProfileData = JSON.parse(
              JSON.stringify(this.doctorProfileData),
            )
            this.editedItemForProfileData = cachedDoctorProfileData
            console.log(cachedDoctorProfileData)
          }
          break
        case 'updateDoctorProfilePicture':
          {
            let cachedDoctorProfileData = JSON.parse(
              JSON.stringify(this.doctorProfileData),
            )
            this.editedItemForProfileData = cachedDoctorProfileData
          }
          break
        case 'updateDoctorPhone':
          {
            let cachedDoctorProfileData = JSON.parse(
              JSON.stringify(this.doctorProfileData),
            )
            this.editedItemForProfileData = cachedDoctorProfileData
          }
          break
        case 'updateDoctorAddress':
          {
            let cachedDoctorProfileData = JSON.parse(
              JSON.stringify(this.doctorProfileData),
            )
            this.editedItemForProfileData = cachedDoctorProfileData
          }
          break
        case 'updateDoctorTitle':
          {
            let cachedDoctorInfoData = JSON.parse(
              JSON.stringify(this.doctorInfoData),
            )
            this.editedItemForInfoData = cachedDoctorInfoData
          }
          break
        case 'updateDoctorBranch':
          {
            let cachedDoctorInfoData = JSON.parse(
              JSON.stringify(this.doctorInfoData),
            )
            this.editedItemForInfoData = cachedDoctorInfoData
          }
          break
        case 'updateDoctorClinicName':
          {
            let cachedDoctorInfoData = JSON.parse(
              JSON.stringify(this.doctorInfoData),
            )
            this.editedItemForInfoData = cachedDoctorInfoData
          }
          break
        case 'updateDoctorDiplomaNo':
          {
            let cachedDoctorInfoData = JSON.parse(
              JSON.stringify(this.doctorInfoData),
            )
            this.editedItemForInfoData = cachedDoctorInfoData
          }
          break
        case 'updateDoctorAbout':
          {
            let cachedDoctorProfileData = JSON.parse(
              JSON.stringify(this.doctorProfileData),
            )
            this.editedItemForProfileData = cachedDoctorProfileData
          }
          break

        case 'updateAcademicInfo':
          {
            let cachedItemData = JSON.parse(JSON.stringify(data))
            this.editedItemForAcademicInfo = cachedItemData
          }
          break
        case 'updateCertificate':
          {
            let cachedItemData = JSON.parse(JSON.stringify(data))
            this.editedItemForCertificate = cachedItemData
          }
          break
        case 'updateExperience':
          {
            let cachedItemData = JSON.parse(JSON.stringify(data))
            this.editedItemForExperience = cachedItemData
          }
          break
      }

      this.openedModals[modalname] = true
    },
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
      // true - false if he wants to reset data of current modal
      if (resetData) {
        switch (index) {
          case 'updateUserName':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.doctorProfileData),
              )
              this.editedItemForProfileData = cachedProfileData
            }
            break
          case 'updateDoctorProfilePicture':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.doctorProfileData),
              )
              this.editedItemForProfileData = cachedProfileData
            }
            break
          case 'updateDoctorPhone':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.doctorProfileData),
              )
              this.editedItemForProfileData = cachedProfileData
            }
            break
          case 'updateDoctorAddress':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.doctorProfileData),
              )
              this.editedItemForProfileData = cachedProfileData
            }
            break
          case 'updateDoctorTitle':
            {
              let cachedInfoData = JSON.parse(
                JSON.stringify(this.doctorInfoData),
              )
              this.editedItemForInfoData = cachedInfoData
            }
            break
          case 'updateDoctorBranch':
            {
              let cachedInfoData = JSON.parse(
                JSON.stringify(this.doctorInfoData),
              )
              this.editedItemForInfoData = cachedInfoData
            }
            break
          case 'updateDoctorClinicName':
            {
              let cachedInfoData = JSON.parse(
                JSON.stringify(this.doctorInfoData),
              )
              this.editedItemForInfoData = cachedInfoData
            }
            break
          case 'updateDoctorDiplomaNo':
            {
              let cachedInfoData = JSON.parse(
                JSON.stringify(this.doctorInfoData),
              )
              this.editedItemForInfoData = cachedInfoData
            }
            break
          case 'updateDoctorAbout':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.doctorProfileData),
              )
              this.editedItemForProfileData = cachedProfileData
            }
            break

          case 'addAcademicInfoModal':
            {
              this.addedAcademicInfoItem = {
                data: DoctorAcademicInfoDTO.createEmpty(),
              }
            }
            break
          case 'updateAcademicInfo':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.academicInfoData),
              )
              this.editedItemForAcademicInfo = cachedProfileData
            }
            break

          case 'addCertificateModal':
            {
              this.addedCertificateItem = {
                data: DoctorCertificateDTO.createEmpty(),
              }
            }
            break
          case 'updateCertificate':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.certificateData),
              )
              this.editedItemForCertificate = cachedProfileData
            }
            break

          case 'addExperienceModal':
            {
              this.addedExperienceItem = {
                data: DoctorExperienceDTO.createEmpty(),
              }
            }
            break
          case 'updateExperience':
            {
              let cachedProfileData = JSON.parse(
                JSON.stringify(this.experienceData),
              )
              this.editedItemForExperience = cachedProfileData
            }
            break
        }
      }
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
    async getDoctor() {
      const response = await this.getDoctorAPI()
      console.log(response)
      this.doctorProfileData = new DoctorProfileDTO(
        response.photoLink,
        response.firstName,
        response.lastName,
        response.email,
        response.phone,
        response.address,
        response.about,
      )
      this.doctorInfoData = new DoctorInfoDTO(
        response.branch,
        response.title,
        response.clinicName,
        response.diplomaNo,
      )
    },
    async updateDoctorProfilePicture(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorProfilePictureAPI(newroleData)
      if (response === true) {
        new Toast(
          'Profile picture updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorProfilePicture')
        let cachedEditedItemData = this.editedItemForProfileData
        this.doctorInfoData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateUserName(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateUserNameAPI(newroleData)
      if (response === true) {
        new Toast(
          'User name and surname updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateUserName')
        let cachedEditedItemData = this.editedItemForProfileData
        this.doctorProfileData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorPhone(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorPhoneAPI(newroleData)
      if (response === true) {
        new Toast(
          'Phone number updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorPhone')
        let cachedEditedItemData = this.editedItemForProfileData
        this.doctorProfileData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorAddress(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorAddressAPI(newroleData)
      if (response === true) {
        new Toast(
          'Address updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorAddress')
        let cachedEditedItemData = this.editedItemForProfileData
        this.doctorProfileData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorTitle(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorTitleAPI(newroleData)
      if (response === true) {
        new Toast(
          'Title updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorTitle')
        let cachedEditedItemData = this.editedItemForInfoData
        this.doctorInfoData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorBranch(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorBranchAPI(newroleData)
      if (response === true) {
        new Toast(
          'Branch updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorBranch')
        let cachedEditedItemData = this.editedItemForInfoData
        this.doctorInfoData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorClinicName(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorClinicNameAPI(newroleData)
      if (response === true) {
        new Toast(
          'Clinic name updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorClinicName')
        let cachedEditedItemData = this.editedItemForInfoData
        this.doctorInfoData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorDiplomaNo(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorDiplomaNoAPI(newroleData)
      if (response === true) {
        new Toast(
          'Diploma no updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorDiplomaNo')
        let cachedEditedItemData = this.editedItemForInfoData
        this.doctorInfoData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async updateDoctorAbout(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateDoctorAboutAPI(newroleData)
      if (response === true) {
        new Toast(
          'About updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        //  this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateDoctorAbout')
        let cachedEditedItemData = this.editedItemForProfileData
        this.doctorProfileData = cachedEditedItemData
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },

    async getAcademicInfoByDoctor(pageOptions) {
      this.academicInfoTable.loading = true
      const response = await this.getAcademicInfoByDoctorAPI(pageOptions)
      this.itemsForAcademicInfo = response.data
      this.academicInfoTable.serverItemsLength = response.totalElements
      this.academicInfoTable.loading = false
    },
    async addAcademicInfo(data) {
      const response = await this.addAcademicInfoAPI(data)
      if (response === true) {
        new Toast(
          'Academic Info added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getAcademicInfoByDoctor(this.academicInfoTable.serverOptions)
        this.closeModal('addAcademicInfoModal', true)
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
    },
    async updateAcademicInfo(newuserData) {
      this.isAbleToPushButton = false
      const response = await this.updateAcademicInfoAPI(newuserData)
      if (response === true) {
        new Toast(
          'Academic info updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getAcademicInfoByDoctor(this.academicInfoTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateAcademicInfo', true)

        this.editedItem = {}
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async deleteAcademicInfo(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteAcademicInfoAPI(uuid)
      if (response === true) {
        this.selectedAcademicInfo = {}
        new Toast(
          'Academic info deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white -align-items-center',
        )
      }
      this.isAbleToPushButton = true
      this.closeModal('deleteAcademicInfo')
    },

    async getCertificateByDoctor(pageOptions) {
      this.certificateTable.loading = true
      const response = await this.getCertificateByDoctorAPI(pageOptions)
      this.itemsForCertificate = response.data
      this.certificateTable.serverItemsLength = response.totalElements
      this.certificateTable.loading = false
    },
    async addCertificate(data) {
      const response = await this.addCertificateAPI(data)
      if (response === true) {
        new Toast(
          'Certificate added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getCertificateByDoctor(this.certificateTable.serverOptions)
        this.closeModal('addCertificateModal', true)
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
    },
    async updateCertificate(newuserData) {
      this.isAbleToPushButton = false
      const response = await this.updateCertificateAPI(newuserData)
      if (response === true) {
        new Toast(
          'Certificate updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getCertificateByDoctor(this.certificateTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateCertificate', true)

        this.editedItem = {}
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async deleteCertificate(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteCertificateAPI(uuid)
      if (response === true) {
        this.selectedCertificate = {}
        new Toast(
          'Certificate deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white -align-items-center',
        )
      }
      this.isAbleToPushButton = true
      this.closeModal('deleteCertificate')
    },

    async getExperienceByDoctor(pageOptions) {
      this.experienceTable.loading = true
      const response = await this.getExperienceByDoctorAPI(pageOptions)
      this.itemsForExperience = response.data
      this.experienceTable.serverItemsLength = response.totalElements
      this.experienceTable.loading = false
    },
    async addExperience(data) {
      data.language = 'TR'
      const response = await this.addExperienceAPI(data)
      if (response === true) {
        new Toast(
          'Experience added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getExperienceByDoctor(this.experienceTable.serverOptions)
        this.closeModal('addExperienceModal', true)
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
      this.isAbleToPushButton = true
    },
    async updateExperience(newuserData) {
      this.isAbleToPushButton = false
      const response = await this.updateExperienceAPI(newuserData)
      if (response === true) {
        new Toast(
          'Experience updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getExperienceByDoctor(this.experienceTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateExperience', true)

        this.editedItem = {}
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
    },
    async deleteExperience(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteExperienceAPI(uuid)
      if (response === true) {
        this.selectedExperience = {}
        new Toast(
          'Experience deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white -align-items-center',
        )
      }
      this.isAbleToPushButton = true
      this.closeModal('deleteExperience')
    },
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
