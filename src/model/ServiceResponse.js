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
import SchemasVersionResponse from './SchemasVersionResponse';
import ServiceCreate from './ServiceCreate';
import ServiceResponseAllOf from './ServiceResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The ServiceResponse model module.
 * @module model/ServiceResponse
 * @version 5.0.1
 */
class ServiceResponse {
    /**
     * Constructs a new <code>ServiceResponse</code>.
     * @alias module:model/ServiceResponse
     * @implements module:model/Timestamps
     * @implements module:model/ServiceCreate
     * @implements module:model/ServiceResponseAllOf
     */
    constructor() { 
        Timestamps.initialize(this);ServiceCreate.initialize(this);ServiceResponseAllOf.initialize(this);
        ServiceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResponse} obj Optional instance to populate.
     * @return {module:model/ServiceResponse} The populated <code>ServiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceResponse();
            Timestamps.constructFromObject(data, obj);
            ServiceCreate.constructFromObject(data, obj);
            ServiceResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('publish_key')) {
                obj['publish_key'] = ApiClient.convertToType(data['publish_key'], 'String');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [SchemasVersionResponse]);
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ServiceResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ServiceResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ServiceResponse.prototype['updated_at'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ServiceResponse.prototype['comment'] = undefined;

/**
 * The name of the service.
 * @member {String} name
 */
ServiceResponse.prototype['name'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
ServiceResponse.prototype['customer_id'] = undefined;

/**
 * The type of this service.
 * @member {module:model/ServiceResponse.TypeEnum} type
 */
ServiceResponse.prototype['type'] = undefined;

/**
 * @member {String} id
 */
ServiceResponse.prototype['id'] = undefined;

/**
 * Unused at this time.
 * @member {String} publish_key
 */
ServiceResponse.prototype['publish_key'] = undefined;

/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */
ServiceResponse.prototype['paused'] = undefined;

/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceResponse.prototype['versions'] = undefined;


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
// Implement ServiceCreate interface:
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ServiceCreate.prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */
ServiceCreate.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
ServiceCreate.prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceCreate.TypeEnum} type
 */
ServiceCreate.prototype['type'] = undefined;
// Implement ServiceResponseAllOf interface:
/**
 * @member {String} id
 */
ServiceResponseAllOf.prototype['id'] = undefined;
/**
 * Unused at this time.
 * @member {String} publish_key
 */
ServiceResponseAllOf.prototype['publish_key'] = undefined;
/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */
ServiceResponseAllOf.prototype['paused'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceResponseAllOf.prototype['versions'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ServiceResponse['TypeEnum'] = {

    /**
     * value: "vcl"
     * @const
     */
    "vcl": "vcl",

    /**
     * value: "wasm"
     * @const
     */
    "wasm": "wasm"
};



export default ServiceResponse;

