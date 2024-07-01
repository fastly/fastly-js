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
import Timestamps from './Timestamps';
import Version from './Version';
import VersionResponseAllOf from './VersionResponseAllOf';

/**
 * The VersionResponse model module.
 * @module model/VersionResponse
 * @version 7.5.0
 */
class VersionResponse {
    /**
     * Constructs a new <code>VersionResponse</code>.
     * @alias module:model/VersionResponse
     * @implements module:model/Version
     * @implements module:model/Timestamps
     * @implements module:model/VersionResponseAllOf
     */
    constructor() { 
        Version.initialize(this);Timestamps.initialize(this);VersionResponseAllOf.initialize(this);
        VersionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionResponse} obj Optional instance to populate.
     * @return {module:model/VersionResponse} The populated <code>VersionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionResponse();
            Version.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            VersionResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('deployed')) {
                obj['deployed'] = ApiClient.convertToType(data['deployed'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('staging')) {
                obj['staging'] = ApiClient.convertToType(data['staging'], 'Boolean');
            }
            if (data.hasOwnProperty('testing')) {
                obj['testing'] = ApiClient.convertToType(data['testing'], 'Boolean');
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
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
VersionResponse.prototype['active'] = false;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
VersionResponse.prototype['comment'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
VersionResponse.prototype['deployed'] = undefined;

/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
VersionResponse.prototype['locked'] = false;

/**
 * The number of this version.
 * @member {Number} number
 */
VersionResponse.prototype['number'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
VersionResponse.prototype['staging'] = false;

/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
VersionResponse.prototype['testing'] = false;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
VersionResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
VersionResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
VersionResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
VersionResponse.prototype['service_id'] = undefined;


// Implement Version interface:
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
Version.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Version.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
Version.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
Version.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */
Version.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
Version.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
Version.prototype['testing'] = false;
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
// Implement VersionResponseAllOf interface:
/**
 * @member {String} service_id
 */
VersionResponseAllOf.prototype['service_id'] = undefined;




export default VersionResponse;

