/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Condition from './Condition';
import Timestamps from './Timestamps';

/**
 * The ConditionResponse model module.
 * @module model/ConditionResponse
 * @version 4.1.0
 */
class ConditionResponse {
    /**
     * Constructs a new <code>ConditionResponse</code>.
     * @alias module:model/ConditionResponse
     * @implements module:model/Condition
     * @implements module:model/Timestamps
     */
    constructor() { 
        Condition.initialize(this);Timestamps.initialize(this);
        ConditionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConditionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConditionResponse} obj Optional instance to populate.
     * @return {module:model/ConditionResponse} The populated <code>ConditionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConditionResponse();
            Condition.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('statement')) {
                obj['statement'] = ApiClient.convertToType(data['statement'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ConditionResponse.prototype['comment'] = undefined;

/**
 * Name of the condition. Required.
 * @member {String} name
 */
ConditionResponse.prototype['name'] = undefined;

/**
 * A numeric string. Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
ConditionResponse.prototype['priority'] = '100';

/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} statement
 */
ConditionResponse.prototype['statement'] = undefined;

/**
 * @member {String} service_id
 */
ConditionResponse.prototype['service_id'] = undefined;

/**
 * A numeric string that represents the service version.
 * @member {String} version
 */
ConditionResponse.prototype['version'] = undefined;

/**
 * Type of the condition. Required.
 * @member {module:model/ConditionResponse.TypeEnum} type
 */
ConditionResponse.prototype['type'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ConditionResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ConditionResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ConditionResponse.prototype['updated_at'] = undefined;


// Implement Condition interface:
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Condition.prototype['comment'] = undefined;
/**
 * Name of the condition. Required.
 * @member {String} name
 */
Condition.prototype['name'] = undefined;
/**
 * A numeric string. Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
Condition.prototype['priority'] = '100';
/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} statement
 */
Condition.prototype['statement'] = undefined;
/**
 * @member {String} service_id
 */
Condition.prototype['service_id'] = undefined;
/**
 * A numeric string that represents the service version.
 * @member {String} version
 */
Condition.prototype['version'] = undefined;
/**
 * Type of the condition. Required.
 * @member {module:model/Condition.TypeEnum} type
 */
Condition.prototype['type'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ConditionResponse['TypeEnum'] = {

    /**
     * value: "REQUEST"
     * @const
     */
    "REQUEST": "REQUEST",

    /**
     * value: "CACHE"
     * @const
     */
    "CACHE": "CACHE",

    /**
     * value: "RESPONSE"
     * @const
     */
    "RESPONSE": "RESPONSE",

    /**
     * value: "PREFETCH"
     * @const
     */
    "PREFETCH": "PREFETCH"
};



export default ConditionResponse;

