"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingBigqueryAllOf model module.
 * @module model/LoggingBigqueryAllOf
 * @version 3.0.0-alpha1
 */
var LoggingBigqueryAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingBigqueryAllOf</code>.
   * @alias module:model/LoggingBigqueryAllOf
   */
  function LoggingBigqueryAllOf() {
    _classCallCheck(this, LoggingBigqueryAllOf);

    LoggingBigqueryAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingBigqueryAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingBigqueryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigqueryAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingBigqueryAllOf} The populated <code>LoggingBigqueryAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingBigqueryAllOf();

        if (data.hasOwnProperty('dataset')) {
          obj['dataset'] = _ApiClient["default"].convertToType(data['dataset'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('table')) {
          obj['table'] = _ApiClient["default"].convertToType(data['table'], 'String');
        }

        if (data.hasOwnProperty('template_suffix')) {
          obj['template_suffix'] = _ApiClient["default"].convertToType(data['template_suffix'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingBigqueryAllOf;
}();
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */


LoggingBigqueryAllOf.prototype['dataset'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */

LoggingBigqueryAllOf.prototype['format'] = undefined;
/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */

LoggingBigqueryAllOf.prototype['name'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

LoggingBigqueryAllOf.prototype['project_id'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */

LoggingBigqueryAllOf.prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */

LoggingBigqueryAllOf.prototype['template_suffix'] = undefined;
var _default = LoggingBigqueryAllOf;
exports["default"] = _default;