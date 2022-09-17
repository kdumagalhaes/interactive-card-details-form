import { createContext, ReactNode, useContext, useState } from 'react'
import { Form } from '../components/Form/Form'

interface Form {
  name: string
  cardNumber: string
  expirationMonth: string
  expirationYear: string
  securityCode: string
}

interface FormContextModel {
  formInfo: Form
  getFormInfo: (formInfo: Form) => void
}

interface FormProviderProps {
  children: ReactNode
}

const FormContext = createContext({} as FormContextModel)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formInfo, setFormInfo] = useState<Form>({
    name: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
  })

  const getFormInfo = (formInfo: Form) => {
    const formInfoUpdated: Form = {
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
