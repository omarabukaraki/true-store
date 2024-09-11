import { OrganizationJsonLd } from 'next-seo';


const OrganizationStrData = () => {
    return (
        <OrganizationJsonLd
            type="Organization"
            id="https://true-store-xi.vercel.app"
            logo="https://true-store-xi.vercel.app/logo"
            legalName="true store LLC"
            name="true store"
            address={{
                streetAddress: '1600 Saratoga Ave',
                addressLocality: 'San Jose',
                addressRegion: 'CA',
                postalCode: '95129',
                addressCountry: 'US',
            }}
            contactPoint={[
                {
                    telephone: '+1-401-555-1212',
                    contactType: 'customer service',
                    email: 'customerservice@email.com',
                    areaServed: 'US',
                    availableLanguage: ['English', 'Spanish', 'French'],
                },
            ]}
            sameAs={['https://www.orange-fox.com']}
            url="https://www.purpule-fox.io/"
        />
    )
}

export default OrganizationStrData
