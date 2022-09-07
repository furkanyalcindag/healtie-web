/* eslint-disable */
<template>
  <div>
    <CRow>
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
                  @click="showModal('addRoleModal')"
                  >Ekle
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody class="p-0">
            <easy-data-table
              class="m-4"
              show-index
              v-model:itemsSelected="itemsSelected"
              v-model:server-options="roleTable.serverOptions"
              :server-items-length="roleTable.serverItemsLength"
              :headers="headers"
              :items="items"
              :theme-color="themeColor"
              buttons-pagination
              :loading="roleTable.loading"
              :rows-items="roleTable.rowsItem"
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
                      @click="showModal('updateRoleModal', item)"
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
                        showModal('deleteRoleModal', item),
                          (openedModals.deleteRoleModal = true)
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
                      @click="showModal('showUserModal')"
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
                      @click="showModal('addUserModal')"
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

    <!-- Add Role -->
    <CModal
      size="lg"
      backdrop="static"
      :visible="openedModals.addRoleModal"
      @close="closeModal('addRoleModal')"
    >
      <CModalHeader>
        <CModalTitle>Rol Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI($event, 'addRoleModal', addedItem)
              : null
          "
          needs-validation
          novalidate
          :validated="validationChecked"
        >
          <CCol md="6">
            <CFormLabel for="add-rol-name">Rol adı</CFormLabel>
            <CFormInput
              id="add-rol-name"
              required
              v-model="addedItem.name"
              feedbackInvalid="Lütfen bir rol adı giriniz"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('addRoleModal', true)"
              >İptal</CButton
            >
            <CButton
              color="success"
              :type="isAbleToPushButton ? 'submit' : null"
              >Kaydet</CButton
            >
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Delete Role -->
    <CModal
      size="lg"
      :visible="openedModals.deleteRoleModal"
      @close="closeModal('deleteRoleModal')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Rol <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Rol bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton
            color="secondary"
            @click="closeModal('deleteRoleModal', true)"
            >İptal</CButton
          >
          <CButton
            color="danger"
            @click="isAbleToPushButton ? deleteRole(selectedRole.uuid) : null"
            >SİL</CButton
          >
        </CModalFooter>
      </CModalBody>
    </CModal>
    <!-- Update Role -->
    <CModal
      size="lg"
      :visible="openedModals.updateRoleModal"
      @close="closeModal('updateRoleModal')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Rol Bilgilerini Düzenle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="
            isAbleToPushButton
              ? submitToAPI(
                  $event,
                  'updateRoleModal',
                  JSON.parse(JSON.stringify(editedItem)),
                )
              : null
          "
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
              v-model="editedItem.name"
            />
          </CCol>

          <CModalFooter class="pe-0">
            <CButton color="secondary" @click="closeModal('updateRoleModal')"
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
    <!-- Add user from role modal -->
    <CModal
      size="lg"
      :visible="openedModals.addUserModal"
      @close="closeModal('addUserModal')"
      :no-close-on-backdrop="true"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>Kullanıcı Ekle</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm
          class="row g-3"
          @submit.prevent="submitToAPI()"
          needs-validation
          novalidate
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
            <CButton color="secondary" @click="closeModal('addUserModal')"
              >İptal</CButton
            >
            <CButton color="success" type="submit">Kaydet</CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
    <!-- Show user from role modal -->
    <CModal
      size="lg"
      :visible="openedModals.showUserModal"
      @close="closeModal('showUserModal')"
      backdrop="static"
    >
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
                        openedModals.deleteUserModal = true
                      }
                    "
                  >
                    <CIcon icon="cil-trash" />
                  </CButton>
                </CButtonGroup>
              </div>
            </template>
          </easy-data-table>

          <CButton
            color="secondary"
            class="float-md-end"
            @click="closeModal('showUserModal')"
            >İptal
          </CButton>
        </CCardBody>
      </CModalBody>
    </CModal>
    <!-- Delete user from role modal -->
    <CModal
      size="lg"
      v-model:visible="openedModals.deleteUserModal"
      @close="closeModal('deleteUserModal')"
      backdrop="static"
    >
      <CModalHeader>
        <CModalTitle>User <span class="text-danger">Sil</span></CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5>
          Bu işlemi geri alamazsınız. Kullanıcı bilgilerini
          <span class="text-danger fw-bolder"> silmek istiyor musunuz? </span>
        </h5>
        <CModalFooter class="pe-0">
          <CButton color="secondary" @click="closeModal('deleteUserModal')"
            >İptal</CButton
          >
          <CButton color="danger" type="submit">SİL</CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
  </div>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
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
      headers: [
        { text: 'Rol Adı', value: 'name', sortable: true },
        { text: 'İşlemler', value: 'operations' },
      ],
      items: [],
      editedItem: {
        uuid: null,
        name: null,
      },
      addedItem: {
        name: null,
      },
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
      openedModals: {
        addRoleModal: false,
        deleteRoleModal: false,
        updateRoleModal: false,
        addUserModal: false,
        showUserModal: false,
        deleteUserModal: false,
      },
      validationChecked: false,
      roleTable: {
        serverItemsLength: 0,
        serverOptions: {
          page: 1,
          rowsPerPage: 10,
          language: 'TR',
        },
        rowsItem: [10, 20, 50],
        loading: true,
      },
      isAbleToPushButton: true,
      toasts: [],
    }
  },
  created() {
    this.getRoles(this.roleTable.serverOptions)
  },
  watch: {
    'roleTable.serverOptions'(newvalue) {
      this.getRoles(newvalue)
    },
  },
  methods: {
    ...mapActions({
      getAllRoles: 'role/getRoles',
      deleteRoleAPI: 'role/deleteRole',
      addRoleAPI: 'role/addRole',
      updateRoleAPI: 'role/updateRole',
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
        case 'addRoleModal':
          {
            this.addRole(data)
          }
          break
        case 'updateRoleModal':
          {
            this.updateRole(data)
          }
          break
      }
      this.isAbleToPushButton = true
    },
    showModal(modalname, data) {
      this.selectedRole = data ? JSON.parse(JSON.stringify(data)) : {}
      switch (modalname) {
        case 'updateRoleModal':
          {
            let cachedItemData = JSON.parse(JSON.stringify(data))
            this.editedItem = cachedItemData
          }
          break
      }
      this.openedModals[modalname] = true
    },
    closeModal(modalname, resetData) {
      this.openedModals[modalname] = false
      this.validationChecked = false
      if (resetData) {
        switch (modalname) {
          case 'addRoleModal':
            {
              let cachedAddedItemData = { name: null }
              this.addedItem = cachedAddedItemData
            }
            break
          case 'deleteRoleModal':
            {
              this.selectedRole = {}
            }
            break
        }
      }
    },
    async getRoles(pageOptions) {
      this.roleTable.loading = true
      const response = await this.getAllRoles(pageOptions)
      this.items = response.data
      this.roleTable.serverItemsLength = response.totalElements
      this.roleTable.loading = false
    },
    async addRole(data) {
      this.isAbleToPushButton = false
      const response = await this.addRoleAPI(data)
      if (response === true) {
        this.closeModal('addRoleModal', true)
        this.getRoles(this.roleTable.serverOptions)
        new Toast(
          'New role ' + data.name + ' added successfully',
          'success',
          true,
          'text-white align-items-center',
        )
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
    async updateRole(newroleData) {
      this.isAbleToPushButton = false
      const response = await this.updateRoleAPI(newroleData)
      if (response === true) {
        new Toast(
          'Role updated successfully',
          'success',
          true,
          'text-white align-items-center',
        )
        this.getRoles(this.roleTable.serverOptions)
        this.isAbleToPushButton = true
        this.closeModal('updateRoleModal')
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
    async deleteRole(uuid) {
      this.isAbleToPushButton = false
      const response = await this.deleteRoleAPI(uuid)
      if (response === true) {
        this.isAbleToPushButton = true
        this.selectedRole = {}
      } else {
        new Toast(
          'Something went wrong',
          'danger',
          true,
          'text-white align-items-center',
        )
        this.isAbleToPushButton = true
      }
      this.closeModal('deleteRoleModal')
    },
  },
}
</script>

<style lang="css" scoped>
.rounder {
  border-radius: 50%;
}
</style>
