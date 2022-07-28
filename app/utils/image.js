import ImagePicker from 'react-native-image-crop-picker';

export const GetImageFromGallery = async () => {
  try {
    return await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
  } catch (error) {
    return false;
  }
};

export const GetImageFromCamera = async () => {
  try {
    return await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
  } catch (error) {
    return false;
  }
};
