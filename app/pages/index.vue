<template>
  <main class="w-full h-screen flex items-center justify-center">
    <UCard class="w-96">
      <template #header>
        <h3 class="text-lg font-semibold leading-6">Todo List</h3>
      </template>
      <div class="flex items-center gap-2">
        <UInput
          ref="newTodoInput"
          name="todo"
          class="flex-1"
          placeholder="Add a Todo.."
          autocomplete="off"
          autofocus
          :ui="{ wrapper: 'flex-1' }"
        />

        <UButton type="submit" icon="i-heroicons-plus-20-solid" />
      </div>

      <ul class="divide-y divide-gray-200 dark:divide-gray-800 mt-10">
        <li class="flex items-center gap-4 py-2">
          <span class="flex-1 font-medium">Example Todo</span>

          <UButton
            color="red"
            variant="soft"
            size="2xs"
            icon="i-heroicons-x-mark-20-solid"
          />
        </li>
      </ul>
    </UCard>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>

<!-- <template>
  <main>
    <ImageGallery />
    <RedirectsPanel />
    <MessagesPanel />
  </main>
</template> -->
