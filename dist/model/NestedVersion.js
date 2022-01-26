"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BackendResponse = _interopRequireDefault(require("./BackendResponse"));

var _CacheSettingResponse = _interopRequireDefault(require("./CacheSettingResponse"));

var _ConditionResponse = _interopRequireDefault(require("./ConditionResponse"));

var _DomainResponse = _interopRequireDefault(require("./DomainResponse"));

var _GzipResponse = _interopRequireDefault(require("./GzipResponse"));

var _HeaderResponse = _interopRequireDefault(require("./HeaderResponse"));

var _HealthcheckResponse = _interopRequireDefault(require("./HealthcheckResponse"));

var _SchemasDirector = _interopRequireDefault(require("./SchemasDirector"));

var _SchemasRequestSettingsResponse = _interopRequireDefault(require("./SchemasRequestSettingsResponse"));

var _SchemasResponseObjectResponse = _interopRequireDefault(require("./SchemasResponseObjectResponse"));

var _SchemasSnippetResponse = _interopRequireDefault(require("./SchemasSnippetResponse"));

var _SchemasVclResponse = _interopRequireDefault(require("./SchemasVclResponse"));

var _SchemasVersionResponse = _interopRequireDefault(require("./SchemasVersionResponse"));

var _Settings = _interopRequireDefault(require("./Settings"));

var _VersionDetail = _interopRequireDefault(require("./VersionDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NestedVersion model module.
 * @module model/NestedVersion
 * @version 3.0.0-alpha1
 */
var NestedVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NestedVersion</code>.
   * @alias module:model/NestedVersion
   * @implements module:model/SchemasVersionResponse
   * @implements module:model/VersionDetail
   */
  function NestedVersion() {
    _classCallCheck(this, NestedVersion);

    _SchemasVersionResponse["default"].initialize(this);

    _VersionDetail["default"].initialize(this);

    NestedVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NestedVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NestedVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NestedVersion} obj Optional instance to populate.
     * @return {module:model/NestedVersion} The populated <code>NestedVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NestedVersion();

        _SchemasVersionResponse["default"].constructFromObject(data, obj);

        _VersionDetail["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('deployed')) {
          obj['deployed'] = _ApiClient["default"].convertToType(data['deployed'], 'Boolean');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('staging')) {
          obj['staging'] = _ApiClient["default"].convertToType(data['staging'], 'Boolean');
        }

        if (data.hasOwnProperty('testing')) {
          obj['testing'] = _ApiClient["default"].convertToType(data['testing'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('backends')) {
          obj['backends'] = _ApiClient["default"].convertToType(data['backends'], [_BackendResponse["default"]]);
        }

        if (data.hasOwnProperty('cache_settings')) {
          obj['cache_settings'] = _ApiClient["default"].convertToType(data['cache_settings'], [_CacheSettingResponse["default"]]);
        }

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], [_ConditionResponse["default"]]);
        }

        if (data.hasOwnProperty('directors')) {
          obj['directors'] = _ApiClient["default"].convertToType(data['directors'], [_SchemasDirector["default"]]);
        }

        if (data.hasOwnProperty('domains')) {
          obj['domains'] = _ApiClient["default"].convertToType(data['domains'], [_DomainResponse["default"]]);
        }

        if (data.hasOwnProperty('gzips')) {
          obj['gzips'] = _ApiClient["default"].convertToType(data['gzips'], [_GzipResponse["default"]]);
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], [_HeaderResponse["default"]]);
        }

        if (data.hasOwnProperty('healthchecks')) {
          obj['healthchecks'] = _ApiClient["default"].convertToType(data['healthchecks'], [_HealthcheckResponse["default"]]);
        }

        if (data.hasOwnProperty('request_settings')) {
          obj['request_settings'] = _ApiClient["default"].convertToType(data['request_settings'], [_SchemasRequestSettingsResponse["default"]]);
        }

        if (data.hasOwnProperty('response_objects')) {
          obj['response_objects'] = _ApiClient["default"].convertToType(data['response_objects'], [_SchemasResponseObjectResponse["default"]]);
        }

        if (data.hasOwnProperty('settings')) {
          obj['settings'] = _ApiClient["default"].convertToType(data['settings'], _Settings["default"]);
        }

        if (data.hasOwnProperty('snippets')) {
          obj['snippets'] = _ApiClient["default"].convertToType(data['snippets'], [_SchemasSnippetResponse["default"]]);
        }

        if (data.hasOwnProperty('vcls')) {
          obj['vcls'] = _ApiClient["default"].convertToType(data['vcls'], [_SchemasVclResponse["default"]]);
        }

        if (data.hasOwnProperty('wordpress')) {
          obj['wordpress'] = _ApiClient["default"].convertToType(data['wordpress'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return NestedVersion;
}();
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */


NestedVersion.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

NestedVersion.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

NestedVersion.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

NestedVersion.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

NestedVersion.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

NestedVersion.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

NestedVersion.prototype['testing'] = false;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

NestedVersion.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

NestedVersion.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

NestedVersion.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

NestedVersion.prototype['service_id'] = undefined;
/**
 * List of backends associated to this service.
 * @member {Array.<module:model/BackendResponse>} backends
 */

NestedVersion.prototype['backends'] = undefined;
/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/CacheSettingResponse>} cache_settings
 */

NestedVersion.prototype['cache_settings'] = undefined;
/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/ConditionResponse>} conditions
 */

NestedVersion.prototype['conditions'] = undefined;
/**
 * List of directors associated to this service.
 * @member {Array.<module:model/SchemasDirector>} directors
 */

NestedVersion.prototype['directors'] = undefined;
/**
 * List of domains associated to this service.
 * @member {Array.<module:model/DomainResponse>} domains
 */

NestedVersion.prototype['domains'] = undefined;
/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/GzipResponse>} gzips
 */

NestedVersion.prototype['gzips'] = undefined;
/**
 * List of headers associated to this service.
 * @member {Array.<module:model/HeaderResponse>} headers
 */

NestedVersion.prototype['headers'] = undefined;
/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/HealthcheckResponse>} healthchecks
 */

NestedVersion.prototype['healthchecks'] = undefined;
/**
 * List of request settings for this service.
 * @member {Array.<module:model/SchemasRequestSettingsResponse>} request_settings
 */

NestedVersion.prototype['request_settings'] = undefined;
/**
 * List of response objects for this service.
 * @member {Array.<module:model/SchemasResponseObjectResponse>} response_objects
 */

NestedVersion.prototype['response_objects'] = undefined;
/**
 * @member {module:model/Settings} settings
 */

NestedVersion.prototype['settings'] = undefined;
/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/SchemasSnippetResponse>} snippets
 */

NestedVersion.prototype['snippets'] = undefined;
/**
 * List of VCL files for this service.
 * @member {Array.<module:model/SchemasVclResponse>} vcls
 */

NestedVersion.prototype['vcls'] = undefined;
/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */

NestedVersion.prototype['wordpress'] = undefined; // Implement SchemasVersionResponse interface:

/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */

_SchemasVersionResponse["default"].prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_SchemasVersionResponse["default"].prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

_SchemasVersionResponse["default"].prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

_SchemasVersionResponse["default"].prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

_SchemasVersionResponse["default"].prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

_SchemasVersionResponse["default"].prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

_SchemasVersionResponse["default"].prototype['testing'] = false;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_SchemasVersionResponse["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_SchemasVersionResponse["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_SchemasVersionResponse["default"].prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_SchemasVersionResponse["default"].prototype['service_id'] = undefined; // Implement VersionDetail interface:

/**
 * List of backends associated to this service.
 * @member {Array.<module:model/BackendResponse>} backends
 */

_VersionDetail["default"].prototype['backends'] = undefined;
/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/CacheSettingResponse>} cache_settings
 */

_VersionDetail["default"].prototype['cache_settings'] = undefined;
/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/ConditionResponse>} conditions
 */

_VersionDetail["default"].prototype['conditions'] = undefined;
/**
 * List of directors associated to this service.
 * @member {Array.<module:model/SchemasDirector>} directors
 */

_VersionDetail["default"].prototype['directors'] = undefined;
/**
 * List of domains associated to this service.
 * @member {Array.<module:model/DomainResponse>} domains
 */

_VersionDetail["default"].prototype['domains'] = undefined;
/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/GzipResponse>} gzips
 */

_VersionDetail["default"].prototype['gzips'] = undefined;
/**
 * List of headers associated to this service.
 * @member {Array.<module:model/HeaderResponse>} headers
 */

_VersionDetail["default"].prototype['headers'] = undefined;
/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/HealthcheckResponse>} healthchecks
 */

_VersionDetail["default"].prototype['healthchecks'] = undefined;
/**
 * List of request settings for this service.
 * @member {Array.<module:model/SchemasRequestSettingsResponse>} request_settings
 */

_VersionDetail["default"].prototype['request_settings'] = undefined;
/**
 * List of response objects for this service.
 * @member {Array.<module:model/SchemasResponseObjectResponse>} response_objects
 */

_VersionDetail["default"].prototype['response_objects'] = undefined;
/**
 * @member {module:model/Settings} settings
 */

_VersionDetail["default"].prototype['settings'] = undefined;
/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/SchemasSnippetResponse>} snippets
 */

_VersionDetail["default"].prototype['snippets'] = undefined;
/**
 * List of VCL files for this service.
 * @member {Array.<module:model/SchemasVclResponse>} vcls
 */

_VersionDetail["default"].prototype['vcls'] = undefined;
/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */

_VersionDetail["default"].prototype['wordpress'] = undefined;
var _default = NestedVersion;
exports["default"] = _default;