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
                    @click="showModal('updatePatientAppointmentModal', item)"
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
                    @click="showModal('deletePatientAppointmentModal', item)"
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CButtonGroup>
              </div>
              <CButton
                color="primary"
                class="float-end"
                shape="rounded-pill"
                @click="showModal('addPatientAppointmentModal')"
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
            v-model:server-options="patientAppointmentsTable.serverOptions"
            :server-items-length="patientAppointmentsTable.serverItemsLength"
            :headers="headers"
            :items="items"
            :theme-color="themeColor"
            buttons-pagination
            :loading="patientAppointmentsTable.loading"
            :rows-items="patientAppointmentsTable.rowsItem"
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
                    @click="showModal('updatePatientAppointmentModal', item)"
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
                    @click="showModal('deletePatientAppointmentModal', item)"
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
    <!-- Add Patient Appointment -->
    <CModal
      backdrop="static"
      size="lg"
      :visible="openedModals.addPatientAppointmentModal"
      @close="closeModal('addPatientAppointmentModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'addPatientAppointmentModal',
                  addedItem.data,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          ADD

          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('addPatientAppointmentModal', true)"
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
    <!-- Delete Patient Appointment -->
    <CModal
      size="lg"
      :visible="openedModals.deletePatientAppointmentModal"
      @close="closeModal('deletePatientAppointmentModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Kategori bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton
            color="secondary"
            @click="closeModal('deletePatientAppointmentModal')"
            >Kapat</CButton
          >
          <CButton
            color="danger"
            @click="
              isAbleToPushButton
                ? deletePatientAppointment(selectedPatientAppointment.uuid)
                : null
            "
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Update Patient Appointment -->
    <CModal
      size="lg"
      :visible="openedModals.updatePatientAppointmentModal"
      @close="closeModal('updatePatientAppointmentModal')"
    >
      <CModalHeader>
        <CModalTitle>Kategori Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updatePatientAppointmentModal',
                  editedItem.data,
                )
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CModalFooter class="pe-0">
            <CButton
              color="secondary"
              @click="closeModal('updatePatientAppointmentModal')"
              >Kapat</CButton
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
  </CRow>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
import { mapActions } from 'vuex'
import patientDTO from '@/models/patientDTO'
import Toast from '@/models/create_TOAST_dto'
export default {
  name: 'Colors',
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
  },
  data() {
    return {
      avatar: avatar,
      headers: [
        { text: 'Hasta Adı Soyadı', value: 'name', sortable: true },
        { text: 'Telefon', value: 'articleCount' },
        { text: 'Telefon', value: 'address' },
        { text: 'Not', value: 'note' },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [],
      addedItem: {
        // Real data
        data: patientDTO.createEmpty(),
      },
      editedItem: {
        // Real data
        data: patientDTO.createEmpty(),
      },
      // Category Selection
      parentCategoryList: {
        // The parent category list inside selection in addPatientAppointment
        options: [],
        // Parent category Selection server options for getting options in selection in addPatientAppointmentModal
        parentListSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 50,
        },
        loading: true,
      },
      // Language Selection
      languageList: {
        // The language list inside selection in addPatientAppointment
        options: ['TR', 'EN'],
        // Language Selection server options for getting options in selection in addPatientAppointment
        languageSearcherDefaultServerOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        loading: true,
      },
      themeColor: '#321fdb',
      itemsSelected: [],
      openedModals: {
        addPatientAppointmentModal: false,
        deletePatientAppointmentModal: false,
        updatePatientAppointmentModal: false,
      },
      patientAppointmentsTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },
      validationChecked: false,
      isAbleToPushButton: true,
      selectedPatientAppointment: patientDTO.createEmpty(),
    }
  },
  watch: {
    'patientAppointmentsTable.serverOptions'(newvalue) {
      this.getPatientAppointments(newvalue)
    },
  },
  created() {
    this.getPatientAppointments(this.patientAppointmentsTable.serverOptions)
  },
  methods: {
    ...mapActions({
      getPatientAppointmentsAPI: 'doctor/getPatientAppointments',
      getAllLanguages: 'language/getLanguages',
      addPatientAppointmentAPI: 'doctor/addPatientAppointment',
      deletePatientAppointmentAPI: 'doctor/deletePatientAppointment',
      updatePatientAppointmentAPI: 'doctor/updatePatientAppointment',
    }),
    submitToAPI(event, modalname, data) {
      // Response
      this.isAbleToPushButton = false
      this.validationChecked = true
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        this.isAbleToPushButton = true
        return
      }
      switch (modalname) {
        case 'addPatientAppointmentModal':
          {
            this.addPatientAppointment(JSON.parse(JSON.stringify(data)))
          }
          break
        case 'updatePatientAppointmentModal':
          {
            this.updatePatientAppointment(JSON.parse(JSON.stringify(data)))
          }
          break
      }
    },
    async showModal(modalname, data) {
      switch (modalname) {
        case 'addPatientAppointmentModal':
          break
        case 'updatePatientAppointmentModal':
          {
            console.log(patientDTO.createEmpty())
            this.selectedPatientAppointment = data
              ? JSON.parse(
                  JSON.stringify(
                    patientDTO.createFromJson(JSON.parse(JSON.stringify(data))),
                  ),
                )
              : patientDTO.createEmpty()

            if (data) {
              this.editedItem.data = patientDTO.createFromJson(
                JSON.parse(JSON.stringify(data)),
              )
            } else {
              new Toast(
                'Something went wrong',
                'danger',
                true,
                'text-white align-items-center',
              )
            }
          }
          break
      }
      this.openedModals[modalname] = true
    },
    async closeModal(modalname, resetData) {
      this.openedModals[modalname] = false
      this.validationChecked = false
      if (resetData) {
        switch (modalname) {
          case 'addPatientAppointmentModal':
            {
              // Restore added item on clicking "No/Deny"
              this.addedItem = {
                data: patientDTO.createEmpty(),
              }
            }
            break
        }
      }
      this.queueEnableSendButton()
    },
    // eslint-disable-next-line no-unused-vars
    async getPatientAppointments(pageOptions) {
      this.patientAppointmentsTable.loading = true
      /*const response = await this.getPatientAppointmentsAPI({
        pageOptions: pageOptions,
        filter: null,
      })
      this.items = response.data
      this.patientAppointmentsTable.serverItemsLength = response.totalElements
      */
      this.patientAppointmentsTable.loading = false
    },
    async addPatientAppointment(data) {
      const response = await this.addPatientAppointmentAPI(data)
      if (response === true) {
        new Toast(
          'Category added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.reloadTable()
        this.closeModal('addPatientAppointmentModal', true)
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
    },
    async updatePatientAppointment(newPatientAppointmentData) {
      const response = await this.updatePatientAppointmentAPI(
        newPatientAppointmentData,
      )
      if (response === true) {
        new Toast(
          'Category updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.reloadTable()
        this.closeModal('updatePatientAppointmentModal')
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
      }
    },
    async deletePatientAppointment(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deletePatientAppointmentAPI(uuid)
      if (response === true) {
        this.selectedPatientAppointment = patientDTO.createEmpty()
        new Toast(
          'Category deleted successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.reloadTable()
        this.closeModal('deletePatientAppointmentModal')
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white -align-items-center',
        )
      }
    },
    async queueEnableSendButton() {
      await this.$store.dispatch('invokeSendButtonDelay')
      this.isAbleToPushButton = true
    },
    async reloadTable(tableName) {
      switch (tableName) {
        // Main table
        default:
          {
            this.getPatientAppointments(
              this.patientAppointmentsTable.serverOptions,
            )
          }
          break
      }
    },
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
