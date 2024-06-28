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
import Backend from './Backend';
import Director from './Director';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The DirectorResponse model module.
 * @module model/DirectorResponse
 * @version 7.4.0
 */
class DirectorResponse {
    /**
     * Constructs a new <code>DirectorResponse</code>.
     * @alias module:model/DirectorResponse
     * @implements module:model/Director
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     */
    constructor() { 
        Director.initialize(this);ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);
        DirectorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DirectorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorResponse} obj Optional instance to populate.
     * @return {module:model/DirectorResponse} The populated <code>DirectorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectorResponse();
            Director.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('backends')) {
                obj['backends'] = ApiClient.convertToType(data['backends'], [Backend]);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('retries')) {
                obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
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
 * List of backends associated to a director.
 * @member {Array.<module:model/Backend>} backends
 */
DirectorResponse.prototype['backends'] = undefined;

/**
 * Unused.
 * @member {Number} capacity
 */
DirectorResponse.prototype['capacity'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
DirectorResponse.prototype['comment'] = undefined;

/**
 * Name for the Director.
 * @member {String} name
 */
DirectorResponse.prototype['name'] = undefined;

/**
 * The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
 * @member {Number} quorum
 * @default 75
 */
DirectorResponse.prototype['quorum'] = 75;

/**
 * Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
DirectorResponse.prototype['shield'] = 'null';

/**
 * What type of load balance group to use.
 * @member {module:model/DirectorResponse.TypeEnum} type
 * @default TypeEnum.random
 */
DirectorResponse.prototype['type'] = undefined;

/**
 * How many backends to search if it fails.
 * @member {Number} retries
 * @default 5
 */
DirectorResponse.prototype['retries'] = 5;

/**
 * @member {String} service_id
 */
DirectorResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
DirectorResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DirectorResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
DirectorResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DirectorResponse.prototype['updated_at'] = undefined;


// Implement Director interface:
/**
 * List of backends associated to a director.
 * @member {Array.<module:model/Backend>} backends
 */
Director.prototype['backends'] = undefined;
/**
 * Unused.
 * @member {Number} capacity
 */
Director.prototype['capacity'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Director.prototype['comment'] = undefined;
/**
 * Name for the Director.
 * @member {String} name
 */
Director.prototype['name'] = undefined;
/**
 * The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
 * @member {Number} quorum
 * @default 75
 */
Director.prototype['quorum'] = 75;
/**
 * Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
Director.prototype['shield'] = 'null';
/**
 * What type of load balance group to use.
 * @member {module:model/Director.TypeEnum} type
 * @default TypeEnum.random
 */
Director.prototype['type'] = undefined;
/**
 * How many backends to search if it fails.
 * @member {Number} retries
 * @default 5
 */
Director.prototype['retries'] = 5;
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
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
 * @enum {Number}
 * @readonly
 */
DirectorResponse['TypeEnum'] = {

    /**
     * value: 1
     * @const
     */
    "random": 1,

    /**
     * value: 3
     * @const
     */
    "hash": 3,

    /**
     * value: 4
     * @const
     */
    "client": 4
};



export default DirectorResponse;

