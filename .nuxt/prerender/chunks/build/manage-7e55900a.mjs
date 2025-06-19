import { defineComponent, ref, watch, withCtx, createVNode, createTextVNode, unref, nextTick, useSSRContext } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { o as useRouter$1, d as defineStore, V as VCard, b as VBtn, h as hrApi } from './server.mjs';
import { ssrRenderComponent } from 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { u as useEmpStore } from './emp-413922b9.mjs';
import { V as VRow } from './VRow-c98dee58.mjs';
import { V as VCol } from './VCol-2b70c3e1.mjs';
import { V as VTextField } from './VCheckboxBtn-aab82c77.mjs';
import { V as VSelect } from './VSelect-03a0285c.mjs';
import { V as VDataTable } from './VDataTable-34954fd7.mjs';
import { V as VSnackbar } from './VSnackbar-2c0a46be.mjs';
import { V as VAlert } from './VAlert-81d540a6.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/h3@1.15.1/node_modules/h3/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/axios@1.6.2/node_modules/axios/index.js';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@antfu+utils@0.7.6/node_modules/@antfu/utils/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/vue3-perfect-scrollbar@1.6.1_postcss@8.5.3/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.cjs.js';
import '../_/nitro.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/node-mock-http@1.0.0/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/unstorage@1.15.0_db0@0.3.2_ioredis@5.6.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/dev/MyHRVue/HR_nuxt_frontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import './VMenu-4a1335b2.mjs';
import './VDivider-8fd47435.mjs';

const EDU_URL = "/edu";
function approReqEdu(payload) {
  console.log("payload", payload);
  return hrApi.post(`${EDU_URL}/approReqEdu`, payload);
}
function findEduListByStatus(payload) {
  console.log("payload", payload);
  return hrApi.get(`${EDU_URL}/searchEduListByStatus`, {
    params: payload
  });
}
function removeEduList(payload) {
  return hrApi.delete(`${EDU_URL}/removeEduList`, {
    params: {
      searchYear: payload.searchYear,
      eduCode: payload.eduCode,
      empCode: payload.empCode,
      status: payload.status
    }
  });
}
const eduStore = defineStore("eduStore", {
  state: () => ({
    eduList: [{
      deptName: "",
      durationOfTraining: "",
      empCode: "",
      empName: "",
      searchYear: "",
      status: ""
    }],
    selEduList: [{
      eduCode: "",
      eduName: "",
      empCode: "",
      empName: "",
      deptCode: "",
      deptName: "",
      eduHistory: "",
      searchYear: "",
      status: ""
    }]
  }),
  actions: {
    /**
     * 교육 관리 및 승인요청
     */
    async APPRO_EDU_LIST(payload) {
      try {
        console.log("\uAD50\uC721 \uC2B9\uC778\uC694\uCCAD\uC911");
        const response = await approReqEdu(payload);
        this.eduList = response.data.eduList;
        console.log("response.data", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 교육 관리 승인상태별 조회
     */
    async SEARCH_EDU_LIST_STATUS(payload) {
      try {
        console.log("\uAD50\uC721 \uAD00\uB9AC \uC2B9\uC778\uC5EC\uBD80 \uC870\uD68C");
        const response = await findEduListByStatus(payload);
        this.selEduList = response.data;
        console.log("response", response.data);
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    /**
     * 교육 관리 내역 삭제
     */
    async DELETE_EDU_LIST(payload) {
      try {
        console.log("\uAD50\uC721 \uAD00\uB9AC \uB0B4\uC5ED \uC0AD\uC81C");
        return await removeEduList(payload);
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter$1();
    const empStore = useEmpStore();
    empStore.loadEmpCode();
    console.log("\uD604\uC7AC \uB85C\uADF8\uC778\uB41C \uC9C1\uC6D0 \uCF54\uB4DC:", empStore.empCode);
    if (empStore.empCode !== "EMP-0001") {
      router.push("/hr/confinement/unauthorized");
    }
    const store = eduStore();
    ref("");
    const startDate = ref("");
    const endDate = ref("");
    const selectStatus = ref("");
    const selectedRows = ref([]);
    const dataTableRef = ref(null);
    const eduList = ref([]);
    const headers = [
      { title: "\uAD50\uC721\uCF54\uB4DC", key: "eduCode", width: 100 },
      { title: "\uAD50\uC721\uBA85", key: "eduName", width: "150px" },
      { title: "\uC9C1\uC6D0\uCF54\uB4DC", key: "empCode", width: 120 },
      { title: "\uC9C1\uC6D0\uBA85", key: "empName", width: 100 },
      { title: "\uBD80\uC11C\uCF54\uB4DC", key: "deptCode", width: 120 },
      { title: "\uBD80\uC11C\uBA85", key: "deptName", width: 120 },
      { title: "\uAD50\uC721 \uC774\uC218 \uB0B4\uC5ED", key: "eduHistory", width: "150px" },
      { title: "\uC2B9\uC778\uC0C1\uD0DC", key: "status", width: 120 },
      { title: "\uAC80\uC0C9\uB144\uB3C4", key: "searchYear", width: "150px" }
    ];
    const statusList = [
      { title: "\uBBF8\uC2B9\uC778", value: "\uC2E0\uCCAD\uC644\uB8CC" },
      { title: "\uC2B9\uC778\uC694\uCCAD", value: "\uC2B9\uC778\uC694\uCCAD" },
      { title: "\uBC18\uB824", value: "\uC2B9\uC778\uBC18\uB824" },
      { title: "\uC2B9\uC778\uC644\uB8CC", value: "\uC2B9\uC778\uC644\uB8CC" }
    ];
    const isSuccessFunc = ref(false);
    const snackbarColor = ref("success");
    const snackbarType = ref("success");
    const snackbarText = ref("\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    const resetSelection = () => {
      selectedRows.value = [];
    };
    const searchEduStatus = async () => {
      try {
        const status = selectStatus.value;
        const sDate = startDate.value;
        const eDate = endDate.value;
        const selectData = {
          // searchYear,
          sDate,
          eDate,
          status
        };
        console.log(selectData);
        await store.SEARCH_EDU_LIST_STATUS(selectData);
        eduList.value = Array.isArray(store.selEduList) ? store.selEduList : [];
        console.log("\uC870\uD68C \uC131\uACF5", eduList.value);
      } catch (error) {
        throw new Error(error);
      }
      resetSelection();
    };
    const approvalRequest = async () => {
      if (empStore.empCode !== "EMP-0001") {
        snackbarColor.value = "error";
        snackbarText.value = "\u26D4 \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574\uC8FC\uC138\uC694.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      console.log("\uC2B9\uC778\uC694\uCCAD \uC2E4\uD589", selectedRows.value);
      const hasApproved = selectedRows.value.some((row) => row.status === "\uC2B9\uC778\uC644\uB8CC");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "\u2705 \uC774\uBBF8 \uC2B9\uC778\uC644\uB8CC\uB41C \uD56D\uBAA9\uC785\uB2C8\uB2E4.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      for (const row of selectedRows.value) {
        const { searchYear, eduCode } = row;
        const approvalEdu = {
          searchYear,
          eduCode,
          status: "\uC2B9\uC778\uC694\uCCAD"
        };
        await store.APPRO_EDU_LIST(approvalEdu);
      }
      searchEduStatus();
      resetSelection();
    };
    const deleteEdu = async () => {
      console.log("\uC0AD\uC81C\uC2E4\uD589", selectedRows.value);
      const hasApproved = selectedRows.value.some((row) => row.status === "\uC2B9\uC778\uC644\uB8CC");
      const hasRequested = selectedRows.value.some((row) => row.status === "\uC2B9\uC778\uC694\uCCAD");
      const hasRejected = selectedRows.value.some((row) => row.status === "\uBC18\uB824");
      if (hasApproved) {
        snackbarColor.value = "error";
        snackbarText.value = "\u2705 \uC2B9\uC778\uC644\uB8CC\uB41C \uD56D\uBAA9\uC740 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
        snackbarType.value = "error";
        isSuccessFunc.value = true;
        return;
      }
      if (hasRequested) {
        snackbarColor.value = "warning";
        snackbarText.value = "\u26A0\uFE0F \uC2B9\uC778\uC694\uCCAD \uC911\uC778 \uD56D\uBAA9\uC740 \uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
        snackbarType.value = "warning";
        isSuccessFunc.value = true;
        return;
      }
      if (hasRejected) {
        snackbarColor.value = "info";
        snackbarText.value = "\u2139\uFE0F \uC2B9\uC778\uBC18\uB824 \uD56D\uBAA9\uC740 \uAD00\uB9AC\uC790 \uD655\uC778 \uD6C4 \uC0AD\uC81C \uAC00\uB2A5\uD569\uB2C8\uB2E4.";
        snackbarType.value = "info";
        isSuccessFunc.value = true;
        return;
      }
      try {
        for (const row of selectedRows.value) {
          const { searchYear, eduCode, empCode, status } = row;
          const removeEdu = {
            searchYear,
            eduCode,
            empCode,
            status
          };
          await store.DELETE_EDU_LIST(removeEdu);
        }
        searchEduStatus();
        await nextTick();
        resetSelection();
      } catch (error) {
        console.error("\uC0AD\uC81C \uC911 \uC624\uB958 \uBC1C\uC0DD:", error.message);
      }
    };
    watch(selectedRows, (newVal) => {
      console.log("[\uC120\uD0DD\uB41C \uD589]", newVal);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="mb-6">\u{1F4CB} \uAD50\uC721 \uAD00\uB9AC \uBC0F \uC2B9\uC778\uC694\uCCAD</h1>`);
      _push(ssrRenderComponent(VCard, { class: "pa-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "align-end mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: startDate.value,
                          "onUpdate:modelValue": ($event) => startDate.value = $event,
                          type: "date",
                          label: "\uC2DC\uC791\uC77C",
                          placeholder: "\uC2DC\uC791\uC77C",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: startDate.value,
                            "onUpdate:modelValue": ($event) => startDate.value = $event,
                            type: "date",
                            label: "\uC2DC\uC791\uC77C",
                            placeholder: "\uC2DC\uC791\uC77C",
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: endDate.value,
                          "onUpdate:modelValue": ($event) => endDate.value = $event,
                          type: "date",
                          label: "\uC885\uB8CC\uC77C",
                          placeholder: "\uC885\uB8CC\uC77C",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: endDate.value,
                            "onUpdate:modelValue": ($event) => endDate.value = $event,
                            type: "date",
                            label: "\uC885\uB8CC\uC77C",
                            placeholder: "\uC885\uB8CC\uC77C",
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "\uC2B9\uC778\uC0C1\uD0DC",
                          items: statusList,
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: selectStatus.value,
                            "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                            label: "\uC2B9\uC778\uC0C1\uD0DC",
                            items: statusList,
                            variant: "outlined",
                            density: "compact",
                            class: "compact-textfield"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "d-flex justify-end align-end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "primary",
                          onClick: searchEduStatus
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC870\uD68C `);
                            } else {
                              return [
                                createTextVNode(" \uC870\uD68C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "success",
                          onClick: approvalRequest
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC2B9\uC778\uC694\uCCAD `);
                            } else {
                              return [
                                createTextVNode(" \uC2B9\uC778\uC694\uCCAD ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEdu
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC0AD\uC81C `);
                            } else {
                              return [
                                createTextVNode(" \uC0AD\uC81C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "primary",
                            onClick: searchEduStatus
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC870\uD68C ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "success",
                            onClick: approvalRequest
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC2B9\uC778\uC694\uCCAD ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            class: "ma-1",
                            color: "error",
                            onClick: deleteEdu
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC0AD\uC81C ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "3",
                      mt: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: startDate.value,
                          "onUpdate:modelValue": ($event) => startDate.value = $event,
                          type: "date",
                          label: "\uC2DC\uC791\uC77C",
                          placeholder: "\uC2DC\uC791\uC77C",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "3",
                      mt: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: endDate.value,
                          "onUpdate:modelValue": ($event) => endDate.value = $event,
                          type: "date",
                          label: "\uC885\uB8CC\uC77C",
                          placeholder: "\uC885\uB8CC\uC77C",
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: selectStatus.value,
                          "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                          label: "\uC2B9\uC778\uC0C1\uD0DC",
                          items: statusList,
                          variant: "outlined",
                          density: "compact",
                          class: "compact-textfield"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      class: "d-flex justify-end align-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "primary",
                          onClick: searchEduStatus
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC870\uD68C ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "success",
                          onClick: approvalRequest
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC2B9\uC778\uC694\uCCAD ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          class: "ma-1",
                          color: "error",
                          onClick: deleteEdu
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC0AD\uC81C ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VDataTable), {
              ref_key: "dataTableRef",
              ref: dataTableRef,
              modelValue: selectedRows.value,
              "onUpdate:modelValue": ($event) => selectedRows.value = $event,
              class: "mt-8",
              headers,
              items: eduList.value,
              "items-per-page": 10,
              "show-select": "",
              "item-value": "eduCode",
              "return-object": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { class: "align-end mb-4" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: startDate.value,
                        "onUpdate:modelValue": ($event) => startDate.value = $event,
                        type: "date",
                        label: "\uC2DC\uC791\uC77C",
                        placeholder: "\uC2DC\uC791\uC77C",
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "3",
                    mt: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: endDate.value,
                        "onUpdate:modelValue": ($event) => endDate.value = $event,
                        type: "date",
                        label: "\uC885\uB8CC\uC77C",
                        placeholder: "\uC885\uB8CC\uC77C",
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: selectStatus.value,
                        "onUpdate:modelValue": ($event) => selectStatus.value = $event,
                        label: "\uC2B9\uC778\uC0C1\uD0DC",
                        items: statusList,
                        variant: "outlined",
                        density: "compact",
                        class: "compact-textfield"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    class: "d-flex justify-end align-end"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "primary",
                        onClick: searchEduStatus
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC870\uD68C ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "success",
                        onClick: approvalRequest
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC2B9\uC778\uC694\uCCAD ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        class: "ma-1",
                        color: "error",
                        onClick: deleteEdu
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC0AD\uC81C ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(VDataTable), {
                ref_key: "dataTableRef",
                ref: dataTableRef,
                modelValue: selectedRows.value,
                "onUpdate:modelValue": ($event) => selectedRows.value = $event,
                class: "mt-8",
                headers,
                items: eduList.value,
                "items-per-page": 10,
                "show-select": "",
                "item-value": "eduCode",
                "return-object": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSnackbar, {
        modelValue: isSuccessFunc.value,
        "onUpdate:modelValue": ($event) => isSuccessFunc.value = $event,
        location: "top",
        timeout: 3e3,
        color: snackbarColor.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAlert, {
              density: "compact",
              type: snackbarType.value,
              title: "\uC54C\uB9BC",
              text: snackbarText.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAlert, {
                density: "compact",
                type: snackbarType.value,
                title: "\uC54C\uB9BC",
                text: snackbarText.value
              }, null, 8, ["type", "text"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hr/education/manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
