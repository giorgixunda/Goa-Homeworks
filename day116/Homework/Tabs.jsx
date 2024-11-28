import { Tab } from '@headlessui/react'

export default function Tabs() {
  return (
    <div className="w-64 mx-auto mt-10">
      <Tab.Group>
        <Tab.List className="flex space-x-4 p-2 bg-gray-200 rounded-t-lg">
          <Tab className="px-4 py-2">Tab 1</Tab>
          <Tab className="px-4 py-2">Tab 2</Tab>
          <Tab className="px-4 py-2">Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="p-4 bg-gray-100">Content 1</Tab.Panel>
          <Tab.Panel className="p-4 bg-gray-100">Content 2</Tab.Panel>
          <Tab.Panel className="p-4 bg-gray-100">Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
