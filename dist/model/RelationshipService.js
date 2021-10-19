"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipServiceService = _interopRequireDefault(require("./RelationshipServiceService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipService model module.
 * @module model/RelationshipService
 * @version 3.0.0-alpha1
 */
var RelationshipService = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipService</code>.
   * @alias module:model/RelationshipService
   */
  function RelationshipService() {
    _classCallCheck(this, RelationshipService);

    RelationshipService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipService} obj Optional instance to populate.
     * @return {module:model/RelationshipService} The populated <code>RelationshipService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipService();

        if (data.hasOwnProperty('service')) {
          obj['service'] = _RelationshipServiceService["default"].constructFromObject(data['service']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipService;
}();
/**
 * @member {module:model/RelationshipServiceService} service
 */


RelationshipService.prototype['service'] = undefined;
var _default = RelationshipService;
exports["default"] = _default;