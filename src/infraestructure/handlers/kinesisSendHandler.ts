import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid'

 export const kinesisSend = async (event) => {
  console.log("inicio ->")
  const kinesis = new Kinesis();
  const labKinesisChanel:any = process.env.LAB_CHANNEL_KINESIS;

 try {
    await kinesis.putRecord({
      Data: JSON.stringify(event),
      PartitionKey: uuidv4(),
      StreamName: labKinesisChanel,
    }, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Datos enviados correctamente al canal ${labKinesisChanel}`,data);
      }
    });
 } catch (error) {
  console.log("error--->",JSON.stringify(error))
 }
  console.log("esto esta completado")
  return "todo completo";

};
