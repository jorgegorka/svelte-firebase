<script>
  import { createEventDispatcher } from 'svelte'
  import Button from './button.svelte'

  const dispatch = createEventDispatcher()

  let pinNumber = ''
  let hideNumber = ''

  const addNumber = number => {
    if (number === '.' && ~pinNumber.indexOf('.')) {
      return
    }

    pinNumber += number
    hideNumber += '*'
  }

  const removeNumber = () => {
    if (pinNumber.length > 0) {
      pinNumber = pinNumber.slice(0, -1)
      hideNumber = hideNumber.slice(0, -1)
    }
  }

  const sendInfo = () => {
    dispatch('sendInfoPad', pinNumber)
  }
</script>

<style>
  .number-pad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .pad-header {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    height: 5rem;
  }

  .last-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .bottom-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .number {
    margin: 1rem;
    border-bottom: 3px solid #000;
    width: 100px;
  }

  .big-font {
    font-size: 1.3rem;
  }
</style>

<div class="pad-header center">
  <p class="number">{hideNumber}</p>
</div>
<div class="bottom-row">
  <Button title="Acceder" color="amber accent-3" on:click={sendInfo} />
</div>

<div class="number-pad">
  <Button title="1" on:click={() => addNumber('1')} />
  <Button title="2" on:click={() => addNumber('2')} />
  <Button title="3" on:click={() => addNumber('3')} />
  <Button title="4" on:click={() => addNumber('4')} />
  <Button title="5" on:click={() => addNumber('5')} />
  <Button title="6" on:click={() => addNumber('6')} />
  <Button title="7" on:click={() => addNumber('7')} />
  <Button title="8" on:click={() => addNumber('8')} />
  <Button title="9" on:click={() => addNumber('9')} />
</div>
<div class="last-row">
  <Button title="0" on:click={() => addNumber('0')} />
  <Button title="Borrar" color="light-blue darken-3" on:click={removeNumber} />
</div>
