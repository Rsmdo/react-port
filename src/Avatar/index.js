import Avatar from 'avataaars';

function MyAvatar() {
    return (
      <div className='mx-auto avatar'>
        <Avatar
            avatarStyle='Transparent'
            topType='ShortHairShortRound'
            accessoriesType='Round'
            hairColor='Black'
            facialHairType='Blank'
            facialHairColor='blank'
            clotheType='BlazerShirt'
            eyeType='Happy'
            eyebrowType='FlatNatural'
            mouthType='Smile'
            skinColor='Brown'
        />
      </div>
    )
  }

export default MyAvatar