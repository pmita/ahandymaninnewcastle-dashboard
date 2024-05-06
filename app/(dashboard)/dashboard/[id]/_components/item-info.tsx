
export type ItemInfoProps = {
  fullName: string;
  email: string;
  mobile: string;
  location?: string;
  additionalInfo?: string;
}

export const ItemInfo = ({
  fullName,
  email,
  mobile,
  location,
  additionalInfo,
}: ItemInfoProps) => {

  return (
    <>
      <h1>Name: {fullName}</h1>
      <h1>Email: {email}</h1>
      <h1>Mobile: {mobile}</h1>
      {location && <h1>Location: {location}</h1>}
      {additionalInfo && <p>Details: {additionalInfo}</p>}
    </>
  )
}