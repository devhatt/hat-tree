import { orgName, links, description } from '../../socials.json'

interface ILink {
  id: string
  label: string
  url: string
  iconName: string
  affiliateLink: boolean
}

let orgNameElement = document.querySelector<HTMLHeadingElement>('#orgName')
let orgDescriptionElement =
  document.querySelector<HTMLParagraphElement>('#orgBio')
let linksContainer =
  document.querySelector<HTMLUListElement>('.links-container')

if (orgNameElement && orgDescriptionElement) {
  orgNameElement.innerText = orgName
  orgDescriptionElement.innerText = description
}

links.map((link: ILink) => {
  if (linksContainer) {
    linksContainer.innerHTML += `
  <li class="social-link">
    <a
      href="${link.url}"
      ${link.affiliateLink ? '' : 'target="_blank"'}
      ${link.affiliateLink ? '' : 'rel="noreferrer"'}
      }
    >
      <i class="ph-fill ph-${link.iconName}"></i> ${link.label}</a
    >
  </li>

  `
  }
})
