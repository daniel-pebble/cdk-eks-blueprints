export interface AckChartMapping {
    chart: string,
    version: string,
    managedPolicyName: string
}

export const enum AckServiceName {
  IAM = "iam",
  RDS = "rds",
  EC2 = "ec2",
  S3  = "s3",
  DYNAMODB = "dynamodb",
  ECR = "ecr",
  SNS = "sns",
  APIGATEWAY = "apigatewayv2",
  ELASTICACHE = "elasticache",
  OPENSEARCH = "opensearchservice",

}
  
export const serviceMappings : {
    [key in AckServiceName]?: AckChartMapping
} = {
    [AckServiceName.IAM]: {
      chart: "iam-chart",
      version:  "v0.0.13",
      managedPolicyName: "IAMFullAccess"
    },
    [AckServiceName.RDS]: {
      chart: "rds-chart",
      version:  "v0.1.1",
      managedPolicyName: "AmazonRDSFullAccess"
    },
    [AckServiceName.EC2]: {
      chart: "ec2-chart",
      version:  "v0.1.0",
      managedPolicyName: "AmazonRDSFullAccess"
    },
    [AckServiceName.S3]: {
      chart: "s3-chart",
      version:  "v0.1.5",
      managedPolicyName: "AmazonS3FullAccess"
    },
    [AckServiceName.DYNAMODB]: {
      chart: "dynamodb-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonDynamoDBFullAccess"
    },
    [AckServiceName.ECR]: {
      chart: "ecr-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonEC2ContainerRegistryFullAccess"
    },
    [AckServiceName.SNS]: {
      chart: "sns-chart",
      version:  "v0.0.1",
      managedPolicyName: "AmazonSNSFullAccess"
    },
    [AckServiceName.APIGATEWAY]: {
      chart: "apigatewayv2-chart",
      version:  "v0.1.4",
      managedPolicyName: ""
    },
    [AckServiceName.ELASTICACHE]: {
      chart: "elasticache-chart",
      version:  "v0.0.20",
      managedPolicyName: ""
    },
    [AckServiceName.OPENSEARCH]: {
      chart: "opensearchservice-chart",
      version:  "v0.0.14",
      managedPolicyName: ""
    },
    [AckServiceName.DYNAMODB]: {
      chart: "dynamodb-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonDynamoDBFullAccess"
    },
    [AckServiceName.ECR]: {
      chart: "ecr-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonEC2ContainerRegistryFullAccess"
    },
    [AckServiceName.SNS]: {
      chart: "sns-chart",
      version:  "v0.0.1",
      managedPolicyName: "AmazonSNSFullAccess"
    }

}
