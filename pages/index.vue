<script setup lang="ts">
  //define
  const {
    fontFamilies,
    fontSizes,
    // fontTypes,
    textAlignments,
    fontWeights,
    colorTypeOption,
    textTranformOption,
    defaultValue,
    defaultStyle,
  } = useConst();

  const textData = ref(defaultValue);
  const textStyle = ref(defaultStyle);
  const result = ref(defaultStyle);

  //mapping
  const optionsFormatter = ({
    options,
    requireStyle = false,
  }: {
    options: string[] | number[];
    requireStyle?: boolean;
  }) => {
    const mapping = options.map((item) => ({
      value: item,
      label: item,
      ...(requireStyle && { style: `font-family: ${item};` }),
    }));
    return mapping;
  };

  //options
  const fontFamiliesOption = optionsFormatter({
    options: fontFamilies,
    requireStyle: true,
  });
  const fontSizesOption = optionsFormatter({ options: fontSizes });
  const textAlignmentsOption = optionsFormatter({ options: textAlignments });
  const fontWeightsOption = optionsFormatter({ options: fontWeights });
  const textTranformOptions = optionsFormatter({ options: textTranformOption });
  const colorTypeOptions = optionsFormatter({ options: colorTypeOption });

  //functions
  const handleSelectOnChange = (e: Event) => {
    const eventTarget = e.target as HTMLSelectElement;
    textData.value = {
      ...textData.value,
      [eventTarget.name]: eventTarget.value,
    };

    // reset to one color only
    if (
      eventTarget.name === "textColorBehavior" &&
      eventTarget.value === "single"
    ) {
      textData.value = {
        ...textData.value,
        textColors: [textData.value.textColors[0]],
      };
    }

    generateResult();
  };

  const handleRangeOnChange = (e: Event) => {
    const eventTarget = e.target as HTMLInputElement;
    textData.value = {
      ...textData.value,
      [eventTarget.name]: Number(eventTarget.value),
    };

    generateResult();
  };

  const handleCheckboxOnChange = (e: Event) => {
    const eventTarget = e.target as HTMLInputElement;
    textData.value = {
      ...textData.value,
      [eventTarget.name]: eventTarget.checked,
    };

    generateResult();
  };

  const handleShadowColorChange = (e: Event) => {
    const eventTarget = e.target as HTMLInputElement;
    textData.value = {
      ...textData.value,
      [eventTarget.name]: eventTarget.value,
    };

    generateResult();
  };

  const handleColorSelect = (e: Event) => {
    const eventTarget = e.target as HTMLInputElement;
    const newColors = [...textData.value.textColors];
    const inputName = eventTarget.name.split("_");

    newColors[Number(inputName[1])] = eventTarget.value;

    textData.value = {
      ...textData.value,
      textColors: [...newColors],
    };

    generateResult();
  };

  const handleAddColor = () => {
    const newColors = [...textData.value.textColors];
    newColors.push("#000000");
    textData.value = {
      ...textData.value,
      textColors: [...newColors],
    };

    generateResult();
  };

  const handleDeleteColor = (index: number) => {
    const newColors = [...textData.value.textColors];
    newColors.splice(index, 1);
    textData.value = {
      ...textData.value,
      textColors: [...newColors],
    };

    generateResult();
  };

  function generateResult() {
    //https://cssgradient.io/blog/css-gradient-text/
    const newTextColor =
      textData.value.textColorBehavior === "multiple" &&
      textData.value.textColors.length > 1
        ? "transparent"
        : textData.value.textColors[0];
    const textShadow = textData.value.showTextShadow
      ? `${textData.value.hShadow}px ${textData.value.vShadow}px ${textData.value.blurShadow}px ${textData.value.textShadowColor}`
      : "none";

    let newStyle = `
    text-align: ${textData.value.textAlign};
    font-weight: ${textData.value.fontWeight};
    font-family: ${textData.value.fontFamily};
    font-size: ${textData.value.fontSize}px;
    font-style: ${textData.value.italic ? "italic" : "normal"};
    text-decoration: ${textData.value.underline ? "underline" : "none"};
    text-underline-offset: ${
      textData.value.underlineOffset === 0
        ? 0
        : textData.value.underlineOffset + "px"
    };
    text-transform: ${textData.value.textTransform};
    word-break: ${textData.value.wordBreak ? "break-all" : "normal"};
    color: ${newTextColor};
    text-shadow: ${textShadow};
    word-spacing: ${textData.value.wordSpacing}em;
    letter-spacing: ${textData.value.letterSpacing}em;
    line-height: ${textData.value.lineHeight}em;
    `;

    if (
      textData.value.textColorBehavior === "multiple" &&
      textData.value.textColors.length > 1
    ) {
      newStyle += `background: -webkit-linear-gradient(${textData.value.textColors.join(
        ","
      )});
    -webkit-background-clip: text;
        `;
    }

    textStyle.value = newStyle;
    result.value = newStyle;
  }
</script>
<template>
  <div class="container">
    <div style="padding: 0.75em">
      <h1>CSS Text Style Generator</h1>
    </div>
    <hr />
    <section>
      <div class="preview">
        <div>
          <p :style="textStyle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus optio expedita ipsam at, sequi a adipisci nihil in
            maxime sint laboriosam recusandae eius repellendus deleniti?
            Laboriosam saepe non earum minima.
          </p>
          <p :style="textStyle">Text</p>
          <p :style="textStyle">Text Generator</p>
          <p :style="textStyle">Text Generator is</p>
          <p :style="textStyle">Text Generator is fire</p>
          <p :style="textStyle">Text Generator is fire!</p>
        </div>
      </div>
      <div class="separator"></div>
      <div class="control-container">
        <div class="control-panel">
          <div class="control">
            <h2>Font Style</h2>
            <!-- <SelectBox
              label="Font Type"
              name="fontType"
              :options="fontTypes"
              :handle-on-change="handleSelectOnChange"
            /> -->
            <SelectBox
              label="Font Family"
              name="fontFamily"
              :options="fontFamiliesOption"
              :handle-on-change="handleSelectOnChange"
            />
            <SelectBox
              label="Font Size"
              name="fontSize"
              :options="fontSizesOption"
              :handle-on-change="handleSelectOnChange"
            />
            <SelectBox
              label="Text Alignment"
              name="textAlign"
              :options="textAlignmentsOption"
              :handle-on-change="handleSelectOnChange"
            />
            <SelectBox
              label="Font Weight"
              name="fontWeight"
              :options="fontWeightsOption"
              :handle-on-change="handleSelectOnChange"
            />
            <SelectBox
              label="Text Transform"
              name="textTransform"
              :options="textTranformOptions"
              :handle-on-change="handleSelectOnChange"
            />

            <RangeSelect
              label="Word Spacing"
              name="wordSpacing"
              :min="-1"
              :max="5"
              :step="0.25"
              :default-value="textData.wordSpacing"
              :handle-on-change="handleRangeOnChange"
            />
            <RangeSelect
              label="Letter Spacing"
              name="letterSpacing"
              :min="0"
              :max="3"
              :step="0.25"
              :default-value="textData.letterSpacing"
              :handle-on-change="handleRangeOnChange"
            />
            <RangeSelect
              label="Line Height"
              name="lineHeight"
              :min="0.25"
              :max="3"
              :step="0.25"
              :default-value="textData.lineHeight"
              :handle-on-change="handleRangeOnChange"
            />
            <CheckBox
              name="wordBreak"
              label="Break Letters"
              :default-value="textData.wordBreak"
              :handle-on-change="handleCheckboxOnChange"
            />
            <CheckBox
              name="italic"
              label="Italic"
              :default-value="textData.italic"
              :handle-on-change="handleCheckboxOnChange"
            />
            <label for="underline">
              <input
                type="checkbox"
                name="underline"
                id="underline"
                @change="handleCheckboxOnChange"
              />
              Show underline
            </label>
            <RangeSelect
              label="Underline Offset"
              name="underlineOffset"
              :min="0"
              :max="10"
              :step="1"
              :disabled="!textData.underline"
              :default-value="textData.underlineOffset"
              :handle-on-change="handleRangeOnChange"
            />

            <h2>Text Shadow</h2>
            <CheckBox
              name="showTextShadow"
              label="Show Text Shadow"
              :default-value="textData.showTextShadow"
              :handle-on-change="handleCheckboxOnChange"
            />
            <input
              type="color"
              name="textShadowColor"
              id="textShadowColor"
              class="shadow-color-select"
              :value="textData.textShadowColor"
              :disabled="!textData.showTextShadow"
              @change="handleShadowColorChange"
            />
            <RangeSelect
              label="H-shadow"
              name="hShadow"
              :min="-15"
              :max="15"
              :step="1"
              :disabled="!textData.showTextShadow"
              :default-value="textData.hShadow"
              :handle-on-change="handleRangeOnChange"
            />
            <RangeSelect
              label="V-shadow"
              name="vShadow"
              :min="-15"
              :max="15"
              :step="1"
              :disabled="!textData.showTextShadow"
              :default-value="textData.vShadow"
              :handle-on-change="handleRangeOnChange"
            />
            <RangeSelect
              label="Blur-shadow"
              name="blurShadow"
              :min="0"
              :max="15"
              :step="1"
              :disabled="!textData.showTextShadow"
              :default-value="textData.blurShadow"
              :handle-on-change="handleRangeOnChange"
            />

            <h2>Text Color</h2>
            <div>
              <SelectBox
                label="Text Color"
                name="textColorBehavior"
                :options="colorTypeOptions"
                :handle-on-change="handleSelectOnChange"
              />
              <div class="color-panel">
                <div
                  v-for="(color, index) in textData.textColors"
                  class="color-selector-wrapper"
                >
                  <input
                    type="color"
                    :name="`color_${index}`"
                    :id="`color_${index}`"
                    class="color-select"
                    :value="color"
                    @change="handleColorSelect"
                  />
                  <button
                    v-if="index !== 0"
                    type="button"
                    class="delete-button"
                    @click="handleDeleteColor(index)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                      />
                    </svg>
                  </button>
                </div>
                <!-- need a button to add color -->
                <button
                  v-if="textData.textColorBehavior === 'multiple'"
                  type="button"
                  class="button"
                  @click="handleAddColor"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="code-container">
            <pre class="code-block">
              {{ result }}
            </pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
