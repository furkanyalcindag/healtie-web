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
                @close="
                  () => {
                    openedModals[0] = false
                  }
                "
              >
                <CModalHeader>
                  <CModalTitle>Doktor Ekle</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CForm
                    class="row g-3"
                    @submit.prevent=""
                    novalidate
                    :validated="false"
                  >
                    <CCol md="6">
                      <CFormLabel for="add-doctor-firstname">İsim</CFormLabel>
                      <CFormInput type="email" id="add-doctor-firstname" />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-lastname">Soyisim</CFormLabel>
                      <CFormInput id="add-doctor-lastname" />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-doctor-username"
                        >Kullanıcı Adı</CFormLabel
                      >
                      <CFormInput id="add-doctor-username" />
                    </CCol>
                    <CCol xs="6">
                      <CFormLabel for="add-doctor-email">Email</CFormLabel>
                      <CFormInput
                        id="add-doctor-email"
                        feedbackInvalid="Please choose a username."
                        required
                        text="Must be 8-20 words long."
                      />
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="add-doctor-city">Branş</CFormLabel>
                      <CFormSelect id="specificSizeSelect">
                        <option>Seçiniz...</option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md="6">
                      <CFormLabel for="inputState">Klinik</CFormLabel>
                      <CFormSelect id="inputState">
                        <option>Seçiniz...</option>
                        <option value="1">Bir</option>
                      </CFormSelect>
                    </CCol>
                    <CCol xs="12">
                      <CFormLabel for="inputAddress">Adres</CFormLabel>
                      <CFormTextarea
                        id="exampleFormControlTextarea1"
                        label="Example textarea"
                        rows="3"
                      ></CFormTextarea>
                    </CCol>
                    <CModalFooter class="pe-0">
                      <CButton color="primary" @click="openedModals[0] = false"
                        >Kapat</CButton
                      >
                      <CButton color="primary" type="submit"
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
            v-model:itemsSelected="itemsSelected"
            :headers="headers"
            :items="items"
            :theme-color="themeColor"
            buttons-pagination
            :rows-per-page="rowsPerPage"
          >
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
        { text: 'PLAYER', value: 'player' },
        { text: 'TEAM', value: 'team' },
        { text: 'NUMBER', value: 'number' },
        { text: 'POSITION', value: 'position' },
        { text: 'HEIGHT', value: 'height' },
        { text: 'WEIGHT (lbs)', value: 'weight', sortable: true },
        { text: 'LAST ATTENDED', value: 'lastAttended' },
        { text: 'COUNTRY', value: 'country' },
      ],
      items: [
        {
          player: 'Stephen Casda',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Stephen Curry',
          team: 'GSW',
          number: 30,
          position: 'G',
          height: '6-2',
          weight: 185,
          lastAttended: 'Davidson',
          country: 'USA',
        },
        {
          player: 'Lebron James',
          team: 'LAL',
          number: 6,
          position: 'F',
          height: '6-9',
          weight: 250,
          lastAttended: 'St. Vincent-St. Mary HS (OH)',
          country: 'USA',
        },
        {
          player: 'Kevin Durant',
          team: 'BKN',
          number: 7,
          position: 'F',
          height: '6-10',
          weight: 240,
          lastAttended: 'Texas-Austin',
          country: 'USA',
        },
        {
          player: 'Giannis Antetokounmpo',
          team: 'MIL',
          number: 34,
          position: 'F',
          height: '6-11',
          weight: 242,
          lastAttended: 'Filathlitikos',
          country: 'Greece',
        },
      ],
      themeColor: '#321fdb',
      itemsSelected: [],
      rowsPerPage: 10,
      openedModals: {
        addDoctorModal: false,
      },
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
