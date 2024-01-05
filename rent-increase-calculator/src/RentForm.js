import { RentFormInput } from './components/RentFormInput'

export const RentForm = () => {
    return (
      <div className="container p-10 min-h-max flex flex-col items-center justify-center text-gray-500 text-sm max-w-2xl">
       
          <RentFormInput
            label="What is your current monthly rent?"
            type="number"
            id="rent"
            placeholder="0.00"
            required = "true"
            info = "some extra info"
          />
      
    
      
      </div>
      
    )
  }