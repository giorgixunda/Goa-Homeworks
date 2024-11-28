import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function DisclosureUi() {
  return (
    <Disclosure>
      <DisclosureButton>Open mobile menu</DisclosureButton>
      <DisclosurePanel>
        <CloseButton href="/home">
          Click For More Details
        </CloseButton>
      </DisclosurePanel>
    </Disclosure>
  )
}