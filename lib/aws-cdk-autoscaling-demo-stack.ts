import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deployment from '@aws-cdk/aws-s3-deployment';

export class AwsCdkAutoscalingDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const demoBucket = new s3.Bucket(this, "demoBucket", {
      bucketName: "demobucket-98900110011",
    })

    new s3deployment.BucketDeployment(this, "demoBucketDeployment", {
      destinationBucket: demoBucket, sources: [
          s3deployment.Source.asset('../assets/simple-id-app/')
      ]

    })
  }
}
