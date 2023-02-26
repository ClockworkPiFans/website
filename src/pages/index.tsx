import i18nextConfig from "@/../next-i18next.config";
import { useRouter } from "next/router"
import { useEffect } from "react";

interface IndexProps {
  locales: string[]
}

export default function Index({ locales }: IndexProps) {
  const router = useRouter();

  useEffect(() => {
    for (const lang of navigator.languages) {
      for (const locale of locales) {
        if (lang.startsWith(locale)) {
          const path = '/' + locale;
          router.replace(path);
          return;
        }
      }
    }
  }, []);

  return <></>;
}

export function getStaticProps() {
  const { locales } = i18nextConfig.i18n;

  return {
    props: {
      locales
    },
  }
}