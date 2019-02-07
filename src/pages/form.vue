<template>
  <f7-page>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
    <f7-block-title>Form Example</f7-block-title>
    <f7-list form>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Name"
      />
      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="E-mail"
      />
      <f7-list-input
        label="URL"
        type="url"
        placeholder="URL"
      />
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
      />
      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
      />
      <f7-list-input
        label="Gender"
        type="select"
        defaultValue="Male"
      >
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>
      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth date"
        value="2014-04-30"
      />
      <f7-list-item title="Toggle">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>
      <f7-list-input
        label="Slider"
        :input="false"
      >
        <f7-range slot="input" :min="0" :max="100" :value="50" :step="1" :label="true"></f7-range>
      </f7-list-input>
      <f7-list-input
        label="Textarea"
        type="textarea"
        placeholder="Bio"
      />
      <f7-list-input
        label="Resizable"
        type="textarea"
        placeholder="Bio" resizable
      />
    </f7-list>

    <f7-block-title>Checkbox group</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n" :title="'Checkbox ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Radio buttons group</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'Radio ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col">Button</f7-button>
        <f7-button class="col" fill>Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" raised>Raised</f7-button>
        <f7-button class="col" raised fill>Raised Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" round>Round</f7-button>
        <f7-button class="col" round fill>Round Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" outline>Outline</f7-button>
        <f7-button class="col" round outline>Outline Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" small outline>Small</f7-button>
        <f7-button class="col" small round outline>Small Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" small fill>Small</f7-button>
        <f7-button class="col" small round fill>Small Round</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" large raised>Large</f7-button>
        <f7-button class="col" large fill raised>Large Fill</f7-button>
      </f7-row>
      <f7-row tag="p">
        <f7-button class="col" large fill raised color="red">Large Red</f7-button>
        <f7-button class="col" large fill raised color="green">Large Green</f7-button>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
export default {}
</script>
