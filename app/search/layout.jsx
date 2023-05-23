import SearchHeader from '@/components/SearchHeader'


export const metadata = {
  title: 'Search | Google Clone',
  description: 'google.com clone built with Next.js',

}

export default function RootLayout({ children }) {
  return (
      <div>
        <SearchHeader/>
        {children}
      </div>
  )
}
