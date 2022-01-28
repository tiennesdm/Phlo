
import { useSnackbar } from 'notistack';


export default function EnqueueSnackBar( ) {
    const { enqueueSnackbar } = useSnackbar();
    const setMessage =(message, variant, duration) =>{
    enqueueSnackbar(message, {
        variant: variant,
        autoHideDuration: duration,
    });
   }
   return setMessage;
}