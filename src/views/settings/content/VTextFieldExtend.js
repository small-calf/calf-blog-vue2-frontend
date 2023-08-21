import vtf from "vuetify/es5/components/VTextField/VTextField.js";

export default {
  props: Object.assign({}, vtf.props, {
    btnText: {
      type: String,
    },
    value:{

    }
  },{

  }),
  methods: {
    renderVTF(h) {
      return h("v-text-field", {
        props: this.$props,
      });
    },
    renderBtn(h) {
      return h("button", {
        class:{
        },
        on:{
            click: e => {
                console.log(e,'eee');
            }
        }
      }, [

    
      ]);
    },
  },
  render(h) {
    return h(
      "div",
      {
        style: {
          display: "flex",
        },
      },
      [this.renderVTF(h), this.renderBtn(h)]
    );
  },
};
