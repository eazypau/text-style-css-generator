<script setup>
const textData = ref({})
const result = ref("")
</script>
<template>
    <div class="container">
        <h1>Text Style Generator</h1>
        <hr>
        <section>
            <div class="preview">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio expedita ipsam at,
                        sequi a adipisci nihil in maxime sint laboriosam recusandae eius repellendus deleniti?
                        Laboriosam saepe non earum minima.</p>
                </div>
            </div>
            <div class="separator"></div>
            <div class="control-container">
                <div class="control-panel">
                    <div class="control">
                        <label for="tag">
                            <div>Type</div>
                            <select name="font type" id="fontType">
                                <option value="paragraph">Paragraph</option>
                                <option value="heading_1">Heading 1</option>
                            </select>
                        </label>
                        <label for="font-size">
                            <div>Font family</div>
                            <select name="font family" id="fontFamily">
                                <option value="open-sans">Open Sans</option>
                            </select>
                        </label>
                        <label for="font-size">
                            <div>Font size</div>
                            <input type="number" name="font size" id="fontSize" min="5">
                        </label>
                        <label for="font-size">
                            <div>Text Arrangment</div>
                            <select name="text arrangement" id="textArrangent">
                                <option value="open-sans">Left Align</option>
                            </select>

                        </label>
                        <label for="font-size">
                            <div>Font Bold</div>
                            <select name="Font thinkness" id="fontThickness">
                                <option value="open-sans">Semibold</option>
                            </select>

                        </label>
                        <label for="textShadowEnable">
                            <input type="checkbox" name="textShadowEnable" id="textShadowEnable"> Show Text Shadow
                        </label>
                        <label>
                            <div>H-shadow</div>
                            <input type="range" name="h-shadow" id="h-shadow">
                        </label>
                        <label>
                            <div>V-shadow</div>
                            <input type="range" name="v-shadow" id="v-shadow">
                        </label>
                        <label>
                            <div>blur-shadow</div>
                            <input type="range" name="blur-shadow" id="blur-shadow">
                        </label>
                        <label for="underline">
                            <input type="checkbox" name="underline" id="underline"> Show underline
                        </label>
                        <label>
                            <div>Underline Offset</div>
                            <input type="range" name="underline-offest" id="underlineOffset">
                        </label>
                        <label>
                            <div>Underline Thickness</div>
                            <input type="range" name="" id="">
                        </label>
                        <label for="italic">
                            <input type="checkbox" name="italic" id="italic"> italic
                        </label>
                        <label for="letter-spacing">
                            <div>Letter Spacing</div>
                            <input type="range" name="letter-spacing" id="letter-spacing">
                        </label>
                        <label for="line-spacing">
                            <div>Line Spacing</div>
                            <input type="range" name="line-spacing" id="line-spacing">
                        </label>
                        <label for="word-break">
                            <input type="checkbox" name="word-break" id="word-break"> Prevent Word Break
                        </label>
                        <div>
                            <div>Text Color</div>
                            <select name="color-option" id="colorOption">
                                <option value="single">Single</option>
                                <option value="multiple">Multiple</option>
                            </select>
                            <div>
                                <input type="color" name="color_1" id="colorOne">
                                <input type="color" name="color_1" id="colorOne">
                                <input type="color" name="color_1" id="colorOne">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Result</p>
                        <div class="code-block"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
