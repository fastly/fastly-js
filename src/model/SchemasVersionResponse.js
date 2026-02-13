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
import Environment from './Environment';
import SchemasVersion from './SchemasVersion';
import Timestamps from './Timestamps';
import VersionResponseAllOf from './VersionResponseAllOf';

/**
 * The SchemasVersionResponse model module.
 * @module model/SchemasVersionResponse
 * @version 15.0.0-beta.4
 */
class SchemasVersionResponse {
    /**
     * Constructs a new <code>SchemasVersionResponse</code>.
     * @alias module:model/SchemasVersionResponse
     * @implements module:model/SchemasVersion
     * @implements module:model/Timestamps
     * @implements module:model/VersionResponseAllOf
     */
    constructor() { 
        SchemasVersion.initialize(this);Timestamps.initialize(this);VersionResponseAllOf.initialize(this);
        SchemasVersionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasVersionResponse} obj Optional instance to populate.
     * @return {module:model/SchemasVersionResponse} The populated <code>SchemasVersionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasVersionResponse();
            SchemasVersion.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [Environment]);
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
SchemasVersionResponse.prototype['active'] = false;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
SchemasVersionResponse.prototype['comment'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
SchemasVersionResponse.prototype['deployed'] = undefined;

/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
SchemasVersionResponse.prototype['locked'] = false;

/**
 * The number of this version.
 * @member {Number} number
 */
SchemasVersionResponse.prototype['number'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
SchemasVersionResponse.prototype['staging'] = false;

/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
SchemasVersionResponse.prototype['testing'] = false;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SchemasVersionResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SchemasVersionResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SchemasVersionResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
SchemasVersionResponse.prototype['service_id'] = undefined;

/**
 * A list of environments where the service has been deployed.
 * @member {Array.<module:model/Environment>} environments
 */
SchemasVersionResponse.prototype['environments'] = undefined;


// Implement SchemasVersion interface:
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
SchemasVersion.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
SchemasVersion.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
SchemasVersion.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
SchemasVersion.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */
SchemasVersion.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
SchemasVersion.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
SchemasVersion.prototype['testing'] = false;
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
/**
 * A list of environments where the service has been deployed.
 * @member {Array.<module:model/Environment>} environments
 */
VersionResponseAllOf.prototype['environments'] = undefined;




export default SchemasVersionResponse;

