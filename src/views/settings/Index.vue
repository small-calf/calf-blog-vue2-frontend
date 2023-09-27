/** 设置页 */
<template>
  <v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-btn icon dark @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row justify="center">
          <v-col cols="8">
            <v-card-text>
              <!-- <v-divider></v-divider> -->
              <v-expansion-panels>
                <PersonalData></PersonalData>
                <AccountSettings></AccountSettings>
              </v-expansion-panels>
            </v-card-text>
          </v-col>
        </v-row>
        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import PersonalData from "./content/PersonalData.vue";
import AccountSettings from "./content/AccountSettings.vue";
export default {
  components: {
    PersonalData,
    AccountSettings,
  },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      date: null,
      trip: {
        name: "",
        location: null,
        start: null,
        end: null,
      },
      locations: [
        "Australia",
        "Barbados",
        "Chile",
        "Denmark",
        "Ecuador",
        "France",
      ],
      dialog2: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me",
        },
        {
          title: "Click Me1",
        },
        {
          title: "Click Me2",
        },
        {
          title: "Click Me 3",
        },
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
    };
  },
  methods: {
    /**
     * 关闭对话框
     */
    closeDialog() {
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style></style>
