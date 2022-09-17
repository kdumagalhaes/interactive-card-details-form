import { createContext, ReactNode, useContext, useState } from 'react'

export interface FormModel {
  name: string
  cardNumber: string
  expirationMonth: string
  expirationYear: string
  securityCode: string
}

interface FormContextModel {
  formInfo: FormModel
  getFormInfo: (formInfo: FormModel) => void
}

interface FormProviderProps {
  children: ReactNode
}

const FormContext = createContext({} as FormContextModel)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formInfo, setFormInfo] = useState<FormModel>({
    name: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
  })

  const getFormInfo = (formInfo: FormModel) => {
    console.log('formInfo = ', formInfo)
    const formInfoUpdated: FormModel = {
      name: formInfo.name,
      cardNumber: formInfo.cardNumber,
      expirationMonth: formInfo.expirationMonth,
      expirationYear: formInfo.expirationYear,
      securityCode: formInfo.securityCode,
    }
    setFormInfo(formInfoUpdated)
  }

  const value = {
    formInfo,
    getFormInfo,
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useFormInfo = () => {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useFormInfo must be used within FormContext')
  }

  return context
}
