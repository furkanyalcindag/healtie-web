<template>
  <CRow>
    <CCol class="justify-content-start">
      <CCard>
        <CCardHeader>
          <!-- <CIcon icon="cil-user" /> -->
          <CRow>
            <CCol lg="3" class="text-left mt-3">
              <h2>Makale Ekle</h2>
            </CCol>
            <CCol lg="9" class="text-right mt-3"> </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class="p-2">
          <CForm
            class="row g-3"
            @submit.prevent="checkValidation()"
            needs-validation
            novalidate
            :validated="validationChecked"
          >
            <CCol md="6">
              <CFormLabel for="add-article-title">Makale Başlığı</CFormLabel>
              <CFormInput
                id="add-article-title"
                required
                feedbackInvalid="Lütfen bir başlık giriniz"
              />
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-tags">Etiketler</CFormLabel>
              <CFormInput
                id="add-article-tags"
                required
                feedbackInvalid="Lütfen ilgili etiketleri giriniz"
              />
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-tags"
                >İlgili Kategorileri Seçiniz</CFormLabel
              >
              <CFormSelect
                size="lg"
                multiple
                required
                aria-label="Multiple select example"
              >
                <option value="1">Dermatoloji</option>
                <option value="2">Kadın Doğum</option>
                <option value="3">Nöroloji</option>
                <option value="4">Üroloji</option>
                <option value="5">Nöroloji</option>
                <option value="6">Nöroloji</option>
              </CFormSelect>
            </CCol>
            <CCol md="6">
              <CFormLabel for="add-article-publishedDate"
                >Yayımlanma Tarihi</CFormLabel
              >
              <CFormInput
                id="add-article-publishedDate"
                required
                type="date"
                feedbackInvalid="Lütfen bir başlangıç tarihi giriniz"
              />
            </CCol>
            <CCol md="12">
              <CFormLabel for="add-article-content" class="m-2"
                >Makale İçeriği</CFormLabel
              >
              <div class="about">
                <light-editor v-model="content" />
                <div class="prose lg:prose-xl" v-html="content" required></div>
              </div>
            </CCol>
            <CModalFooter class="pe-0">
              <CButton color="success" type="submit" class="m-2">
                Kaydet</CButton
              >
            </CModalFooter>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'Colors',
  components: {},
  data() {
    return {
      avatar: avatar,
      headers: [],
      items: [],
      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {},
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
