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
 * The ArcBedrockSetupResponse model module.
 * @module model/ArcBedrockSetupResponse
 * @version 17.0.0
 */
class ArcBedrockSetupResponse {
    /**
     * Constructs a new <code>ArcBedrockSetupResponse</code>.
     * @alias module:model/ArcBedrockSetupResponse
     * @param arc_role_arn {String} The ARN of the AI Runtime Control IAM role your AWS account's trust policy must trust.
     * @param external_id {String} The external ID to require in your trust policy. This is your Fastly customer ID.
     */
    constructor(arc_role_arn, external_id) { 
        
        ArcBedrockSetupResponse.initialize(this, arc_role_arn, external_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, arc_role_arn, external_id) { 
        obj['arc_role_arn'] = arc_role_arn;
        obj['external_id'] = external_id;
    }

    /**
     * Constructs a <code>ArcBedrockSetupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcBedrockSetupResponse} obj Optional instance to populate.
     * @return {module:model/ArcBedrockSetupResponse} The populated <code>ArcBedrockSetupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcBedrockSetupResponse();

            if (data.hasOwnProperty('arc_role_arn')) {
                obj['arc_role_arn'] = ApiClient.convertToType(data['arc_role_arn'], 'String');
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ARN of the AI Runtime Control IAM role your AWS account's trust policy must trust.
 * @member {String} arc_role_arn
 */
ArcBedrockSetupResponse.prototype['arc_role_arn'] = undefined;

/**
 * The external ID to require in your trust policy. This is your Fastly customer ID.
 * @member {String} external_id
 */
ArcBedrockSetupResponse.prototype['external_id'] = undefined;






export default ArcBedrockSetupResponse;

