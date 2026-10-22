/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ArcProviderConnectionAwsIam model module.
 * @module model/ArcProviderConnectionAwsIam
 * @version 17.0.0
 */
class ArcProviderConnectionAwsIam {
    /**
     * Constructs a new <code>ArcProviderConnectionAwsIam</code>.
     * A provider connection to Amazon Bedrock authenticated with an AWS IAM role. Requires AWS IAM authentication to be enabled on your account.
     * @alias module:model/ArcProviderConnectionAwsIam
     * @param name {module:model/ArcProviderConnectionAwsIam.NameEnum} The provider name. Must be `bedrock` for `aws-iam` connections.
     * @param models {Array.<String>} The Bedrock model identifiers this connection is allowed to use.
     * @param auth_type {module:model/ArcProviderConnectionAwsIam.AuthTypeEnum} The authentication type for this connection.
     * @param customer_role_arn {String} The ARN of the IAM role in your AWS account that AI Runtime Control assumes to access Bedrock. See [get Bedrock setup information](https://www.fastly.com/documentation/reference/api/ai-runtime-control/providers#arc-get-bedrock-setup) for the role ARN and external ID your trust policy must reference.
     * @param region {String} The AWS region for Bedrock API requests.
     */
    constructor(name, models, auth_type, customer_role_arn, region) { 
        
        ArcProviderConnectionAwsIam.initialize(this, name, models, auth_type, customer_role_arn, region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, models, auth_type, customer_role_arn, region) { 
        obj['name'] = name;
        obj['models'] = models;
        obj['auth_type'] = auth_type;
        obj['customer_role_arn'] = customer_role_arn;
        obj['region'] = region;
    }

    /**
     * Constructs a <code>ArcProviderConnectionAwsIam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcProviderConnectionAwsIam} obj Optional instance to populate.
     * @return {module:model/ArcProviderConnectionAwsIam} The populated <code>ArcProviderConnectionAwsIam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcProviderConnectionAwsIam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['String']);
            }
            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('customer_role_arn')) {
                obj['customer_role_arn'] = ApiClient.convertToType(data['customer_role_arn'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The provider name. Must be `bedrock` for `aws-iam` connections.
 * @member {module:model/ArcProviderConnectionAwsIam.NameEnum} name
 */
ArcProviderConnectionAwsIam.prototype['name'] = undefined;

/**
 * The Bedrock model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionAwsIam.prototype['models'] = undefined;

/**
 * The authentication type for this connection.
 * @member {module:model/ArcProviderConnectionAwsIam.AuthTypeEnum} auth_type
 */
ArcProviderConnectionAwsIam.prototype['auth_type'] = undefined;

/**
 * The ARN of the IAM role in your AWS account that AI Runtime Control assumes to access Bedrock. See [get Bedrock setup information](https://www.fastly.com/documentation/reference/api/ai-runtime-control/providers#arc-get-bedrock-setup) for the role ARN and external ID your trust policy must reference.
 * @member {String} customer_role_arn
 */
ArcProviderConnectionAwsIam.prototype['customer_role_arn'] = undefined;

/**
 * The AWS region for Bedrock API requests.
 * @member {String} region
 */
ArcProviderConnectionAwsIam.prototype['region'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionAwsIam['NameEnum'] = {

    /**
     * value: "bedrock"
     * @const
     */
    "bedrock": "bedrock"
};


/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionAwsIam['AuthTypeEnum'] = {

    /**
     * value: "aws-iam"
     * @const
     */
    "aws-iam": "aws-iam"
};



export default ArcProviderConnectionAwsIam;

