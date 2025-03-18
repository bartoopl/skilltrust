'use client'

import {NextStudio} from 'next-sanity/studio'
import config from '../../../sanity.config'  // Zmień to na odpowiednią ścieżkę

export default function AdminPage() {
  return <NextStudio config={config} />
}