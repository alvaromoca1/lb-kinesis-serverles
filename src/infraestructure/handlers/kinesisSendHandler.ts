import { Kinesis } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid'

 export const kinesisSend = async (event) => {
  console.log("inicio ->")
  const kinesis = new Kinesis();
  const labKinesisChanel:any = process.env.LAB_CHANNEL_KINESIS;

 try {
    const sendKinesis = await kinesis.putRecord({
      Data: JSON.stringify(event),
      PartitionKey: uuidv4(),
      StreamName: labKinesisChanel,
    }).promise();
    console.log("sendKinesis -->",sendKinesis);
 } catch (error) {
  console.log("error--->",JSON.stringify(error))
 }
  console.log("esto esta completado")
  return "todo completo";

};
