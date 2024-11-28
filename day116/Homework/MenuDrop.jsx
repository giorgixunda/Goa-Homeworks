import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function MenuDrop() {
  return (
    <Menu>
      <MenuButton className= "bg-orange-500 text-white rounded w-[100px] h-[30px]">My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100 bg-teal-400 w-[100px] text-center" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-orange-400 bg-teal-400 w-[100px] text-center" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100 bg-teal-400 w-[100px] text-center" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}