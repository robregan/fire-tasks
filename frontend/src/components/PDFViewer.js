import React, { useRef, useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

const PDFViewer = ({ url }) => {
  const containerRef = useRef()
  const isMounted = useRef(true)
  const [numPages, setNumPages] = useState(null)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (containerRef.current && isMounted.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [url])

  return (
    <div ref={containerRef} className='pdf-viewer'>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  )
}

export default PDFViewer
